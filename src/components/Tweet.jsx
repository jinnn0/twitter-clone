import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

const Tweet = ({ tweet, isCreator, deleteTweet, openEditModal }) => {
  return (
    <li className="tweet">
      <div className="col-1">
        <FaUser />
        {/* <img src="" alt="user-img" className="user-img" /> */}
      </div>

      <div className="col-2">
        <div className="user-info">
          Lex Fridman
          {isCreator && (
            <div className="icons">
              <RiDeleteBinLine
                className="icon delete-icon"
                onClick={() => deleteTweet(tweet.id, tweet.url)}
              />
              <FiEdit2 className="icon" onClick={() => openEditModal(tweet)} />
            </div>
          )}
        </div>

        <div className="tweet-text">{tweet.text}</div>
        <div className="tweet-img">{tweet.url && <img src={tweet.url} alt="img" />}</div>
      </div>
    </li>
  );
};

export default Tweet;
