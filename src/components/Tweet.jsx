import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';

const Tweet = ({ tweet, isCreator, deleteTweet, openEditModal }) => {
  return (
    <li className="tweet">
      <div className="row-1">{tweet.url && <img src={tweet.url} alt="img" />}</div>{' '}
      <div className="row-2">
        <span className="tweet__text">{tweet.text}</span>
        {isCreator && (
          <>
            <RiDeleteBinLine className="icon delete-icon" onClick={() => deleteTweet(tweet.id, tweet.url)} />
            <FiEdit2 className="icon" onClick={() => openEditModal(tweet)} />
          </>
        )}
      </div>
    </li>
  );
};

export default Tweet;
