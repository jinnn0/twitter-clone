import React, { useState } from 'react';
import { useStorage } from '../hooks/firebaseHooks';
import { firebaseStorage } from '../firebase';

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
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleInput} placeholder="what's on your mind?" />
        <input type="file" accept="image/*" onChange={handleFileUpload} />
        <input type="submit" />
      </form>
      {file && (
        <div>
          <img src={url} width="50px" height="50px" alt="img" />
          <button onClick={handleCloseImg}>Clear</button>
        </div>
      )}
    </>
  );
};

export default TweetForm;
