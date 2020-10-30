import React from 'react';

const Tweet = ({ tweet, isCreator, deleteTweet, openEditModal }) => {
  return (
    <>
      <li>
        <span className="text">{tweet.text}</span>
        {tweet.url && <img src={tweet.url} width="50px" height="50px" alt="img" />}
        {isCreator && (
          <>
            <button onClick={() => deleteTweet(tweet.id, tweet.url)} className="delete">
              delete
            </button>
            <button onClick={() => openEditModal(tweet)} className="edit">
              edit
            </button>
          </>
        )}
      </li>
    </>
  );
};

export default Tweet;
