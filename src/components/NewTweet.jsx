import React, { useState } from 'react';
import useFirestorage from '../hooks/useFirestorage';
import { firebaseStorage } from '../firebase';
import { HiUserCircle } from 'react-icons/hi';
import { BiImage } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';
import { GrSchedulePlay } from 'react-icons/gr';

const NewTweet = ({ currentUser, addTweet }) => {
  const [text, setTweet] = useState('');
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useFirestorage(currentUser, file, 'imgUpload');

  const handleInput = (e) => {
    setTweet(e.target.value);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text || imgUrl) {
      addTweet(text, imgUrl);
      setFile(null);
      setImgUrl('');
      setTweet('');
    }
  };

  const handleCloseImg = () => {
    setFile(null);
    setImgUrl('');
    firebaseStorage.refFromURL(imgUrl).delete();
  };

  return (
    <div className="newTweet">
      <div className="col-1">
        {currentUser && currentUser.avatar ? (
          <img src={currentUser.avatar} alt="user-img" className="avatar" />
        ) : (
          <HiUserCircle className="avatar" />
        )}
      </div>

      <form onSubmit={handleSubmit} className="col-2">
        <input
          type="text"
          className="newTweet__input"
          value={text}
          onChange={handleInput}
          placeholder="What's happening ?"
        />

        {file && (
          <div className="newTweet__file-preview">
            <img src={imgUrl} alt="img" />
            <button className="btn btn-sm btn-primary clear-btn" onClick={handleCloseImg}>
              x
            </button>
          </div>
        )}

        <div className="newTweet__footer">
          <label htmlFor="file-input">
            <BiImage />
            <input id="file-input" type="file" accept="image/*" onChange={handleFileUpload} />
          </label>
          <GrEmoji />
          <GrSchedulePlay />
          <button type="submit" className="btn btn-md btn-primary tweet-btn">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTweet;
