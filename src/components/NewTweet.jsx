import React, { useState } from 'react';
import useFirestorage from '../hooks/useFirestorage';
import { firebaseStorage } from '../firebase';
import { HiUserCircle } from 'react-icons/hi';
import { BiImage } from 'react-icons/bi';
import { MdGif } from 'react-icons/md';
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import { GrEmoji } from 'react-icons/gr';
import { GrSchedulePlay } from 'react-icons/gr';

const NewTweet = ({ currentUser, addTweet }) => {
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
    <div className="newTweet">
      <div className="col-1">
        <HiUserCircle className="avatar" />
        {/* <img src="" alt="user-img" className="user-img" /> */}
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
            <img src={url} alt="img" />
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

export default NewTweet;
