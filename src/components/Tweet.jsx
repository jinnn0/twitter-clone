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
        {tweet.user.avatar ? (
          <img src={tweet.user.avatar} alt="avatar" className="avatar" />
        ) : (
          <HiUserCircle className="avatar" />
        )}
      </div>

      <div className="col-2">
        <div className="tweet__header">
          <span>{tweet.user.userName}</span>
          <span>{tweet.user.email ? `@${tweet.user.email}` : null}</span>
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
        <div className="tweet__file">{tweet.imgUrl && <img src={tweet.imgUrl} alt="img" />}</div>
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
