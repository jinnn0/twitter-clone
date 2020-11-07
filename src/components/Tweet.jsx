import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi';
import { FaRegComment } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Tweet = ({ tweet, isCreator, deleteTweet, openEditModal }) => {
  return (
    <li className="tweet">
      <div className="col-1">
        <HiUserCircle className="avatar" />
        {/* <img src="" alt="user-img" className="user-img" /> */}
      </div>

      <div className="col-2">
        <div className="tweet__header">
          Lex Fridman
          {isCreator && (
            <div className="icons">
              <RiDeleteBinLine
                className="icon delete-icon"
                onClick={() => deleteTweet(tweet.id, tweet.url)}
              />
              <FiIcons.FiEdit2 className="icon" onClick={() => openEditModal(tweet)} />
            </div>
          )}
        </div>

        <div className="tweet__text">{tweet.text}</div>
        <div className="tweet__file">{tweet.url && <img src={tweet.url} alt="img" />}</div>
        <div className="tweet__footer">
          <FaRegComment />
          <AiIcons.AiOutlineRetweet />
          <AiIcons.AiOutlineHeart />
          <FiIcons.FiShare />
        </div>
      </div>
    </li>
  );
};

export default Tweet;
