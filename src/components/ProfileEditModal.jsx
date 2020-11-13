import React, { useState, useRef } from 'react';
import { firebaseStore, firebaseAuth } from '../firebase';
import useFirestorage from '../hooks/useFirestorage';
import * as AiIcons from 'react-icons/ai';
import useOnClickOutside from '../hooks/useOnClickOutside';

const ProfileEditModal = ({ currentUser, refreshCurrentUser, setIsEditBtnClick }) => {
  const [newDisplayName, setNewDisplayName] = useState(currentUser.userName || '');
  const [file, setFile] = useState(null);
  const [imgUrl] = useFirestorage(currentUser, file);
  const editFormRef = useRef();

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDisplayName = (e) => {
    setNewDisplayName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newDisplayName !== currentUser.userName || imgUrl !== currentUser.avatar) {
      await currentUser.updateProfile({
        displayName: newDisplayName,
        photoURL: imgUrl
      });

      refreshCurrentUser();

      const snap = await firebaseStore.collection('tweets').where('creatorId', '==', currentUser.uid).get();
      const targetTweets = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      targetTweets.forEach((tweet) => {
        firebaseStore
          .collection('tweets')
          .doc(tweet.id)
          .update({
            user: {
              avatar: firebaseAuth.currentUser.photoURL,
              userName: firebaseAuth.currentUser.displayName
            }
          });
      });
    }
  };

  useOnClickOutside(editFormRef, () => {
    setIsEditBtnClick(false);
  });
  return (
    <div className="edit-modal">
      <form ref={editFormRef} onSubmit={handleSubmit} className="edit-modal-form">
        <div className="edit-modal-form__row-1">
          <AiIcons.AiOutlineClose className="close" onClick={() => setIsEditBtnClick(false)} />
          <h3>Edit profile</h3>
          <button type="submit" className="btn btn-sm btn-primary save-btn" onClick={handleSubmit}>
            Save
          </button>
        </div>

        <div className="edit-modal-form__row-2">
          <label htmlFor="bg-img">
            <AiIcons.AiOutlineCamera className="camera" />
            <AiIcons.AiOutlineClose className="close" />
            <input type="file" accept="image/*" id="bg-img" className="bg-img" />
          </label>
        </div>

        <div className="edit-modal-form__row-3">
          <div className="profile-img">
            {imgUrl && <img src={imgUrl} alt="avatar" />}

            <label htmlFor="file-input">
              <AiIcons.AiOutlineCamera className="camera" />
              <input id="file-input" type="file" accept="image/*" onChange={handleFileUpload} />
            </label>
          </div>
        </div>

        <div className="edit-modal-form__row-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="input"
            value={newDisplayName}
            onChange={handleDisplayName}
          />
        </div>

        <div className="edit-modal-form__row-5">
          <label htmlFor="bio">Bio</label>
          <textarea type="text" id="name" className="input" />
        </div>

        <div className="edit-modal-form__row-6">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" className="input" />
        </div>
      </form>
    </div>
  );
};

export default ProfileEditModal;
