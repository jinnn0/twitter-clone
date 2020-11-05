import React, { useState } from 'react';
import useFirestorage from '../hooks/useFirestorage';
import { firebaseStorage } from '../firebase';
import { HiUserCircle } from 'react-icons/hi';
import { BiImage } from 'react-icons/bi';
import { MdGif } from 'react-icons/md';
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import { GrEmoji } from 'react-icons/gr';
import { GrSchedulePlay } from 'react-icons/gr';

const TweetForm = ({ currentUser, addTweet }) => {
  const [text, setTweet] = useState('');
  const [file, setFile] = useState(null);
  const [url, setUrl] = useFirestorage(currentUser, file);

  const handleInput = (e) => {
    setTweet(e.target.value);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text || url) {
      addTweet(text, url);
      setFile(null);
      setUrl('');
      setTweet('');
    }
  };

  const handleCloseImg = () => {
    setFile(null);
    setUrl('');
    firebaseStorage.refFromURL(url).delete();
  };

  return (
    <div className="tweet-form-container">
      <div className="col-1">
        <div className="profile-img">
          <HiUserCircle />
          {/* <img src="" alt="user-img" className="user-img" /> */}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="col-2">
        <div className="row-1">
          <input
            type="text"
            className="input-text"
            value={text}
            onChange={handleInput}
            placeholder="What's happening ?"
          />
        </div>

        {file && (
          <div className="row-2">
            <div className="photo-snippet-container">
              <img src={url} alt="img" />
              <button className="btn btn-sm btn-primary clear-btn" onClick={handleCloseImg}>
                x
              </button>
            </div>
          </div>
        )}

        <div className="row-3">
          <label htmlFor="add-photo" className="add-photo-label">
            <BiImage className="add-photo-icon" />
            <input
              id="add-photo"
              className="add-photo-input"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
            />
          </label>
          <MdGif />
          <RiBarChartHorizontalFill />
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

export default TweetForm;
