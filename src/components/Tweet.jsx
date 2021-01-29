import React, { useRef, useState, forwardRef } from 'react';
import * as FiIcons from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi';
import { FaRegComment } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import useOnClickOutside from '../hooks/useOnClickOutside';

const Tweet = forwardRef(({ tweet, isCreator, deleteTweet }, ref) => {
  const [isMoreClicked, setIsMoreClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const moreMenuRef = useRef();
  const modalBoxRef = useRef();

  useOnClickOutside(moreMenuRef, () => {
    setIsMoreClicked(false);
  });

  useOnClickOutside(modalBoxRef, () => {
    setIsDeleteClicked(false);
  });

  return (
    <li ref={ref} className="tweet">
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
            <>
              <FiIcons.FiMoreHorizontal className="more" onClick={() => setIsMoreClicked(true)} />

              {isMoreClicked ? (
                <ul className="moreMenu" ref={moreMenuRef}>
                  <li
                    className="delete"
                    onClick={() => {
                      setIsDeleteClicked(true);
                    }}
                  >
                    Delete
                  </li>
                  <li>Pin to your profile</li>
                  <li>Embed Tweet</li>
                  <li>View Tweet activity</li>

                  {isDeleteClicked ? (
                    <div className="modal">
                      <div className="modal-box" ref={modalBoxRef}>
                        <h3>Delete Tweet?</h3>
                        <p>This can't be undone and it will be</p>
                        <p>removed from your profile, the timeline</p>
                        <p>of any accounts that follow you, and</p>
                        <p>from Twitter search results.</p>
                        <form>
                          <button className="btn btn-md cancel" onClick={() => setIsDeleteClicked(false)}>
                            Cancel
                          </button>
                          <button
                            className="btn btn-md delete"
                            onClick={() => deleteTweet(tweet.id, tweet.imgUrl)}
                          >
                            Delete
                          </button>
                        </form>
                      </div>
                    </div>
                  ) : null}
                </ul>
              ) : null}
            </>
          )}
        </div>

        <div className="tweet__text">{tweet.text}</div>
        <div className="tweet__file">{tweet.imgUrl && <img src={tweet.imgUrl} alt="img" />}</div>
        <div className="tweet__footer">
          <span>
            <FaRegComment />
          </span>
          <span>
            <AiIcons.AiOutlineRetweet />
          </span>
          <span>
            <AiIcons.AiOutlineHeart />
          </span>
          <span>
            <FiIcons.FiShare />
          </span>
        </div>
      </div>
    </li>
  );
});

export default Tweet;
