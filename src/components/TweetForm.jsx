import React, { useState } from 'react';
import { useStorage } from '../hooks/firebaseHooks';
import { firebaseStorage } from '../firebase';
import { FaArrowRight } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';

const TweetForm = ({ currentUser, addTweet }) => {
  const [text, setTweet] = useState('');
  const [file, setFile] = useState(null);
  const [url, setUrl] = useStorage(currentUser, file);

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
      <form onSubmit={handleSubmit} className="tweet-form">
        <div className="row-1">
          <input
            type="text"
            className="input-text"
            value={text}
            onChange={handleInput}
            placeholder="what's on your mind?"
          />
          <button type="submit" className="input-submit">
            <FaArrowRight />
          </button>
        </div>

        <div className="row-2">
          <label htmlFor="add-photo" className="add-photo-label">
            <span>Add photo</span>
            <IoMdAddCircle className="add-photo-icon" />
          </label>
          <input
            id="add-photo"
            className="add-photo-input"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
          />
        </div>
      </form>

      {file && (
        <div className="photo-snippet-container">
          <img src={url} alt="img" />
          <button onClick={handleCloseImg}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default TweetForm;
