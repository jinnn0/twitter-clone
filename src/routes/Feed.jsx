import React from 'react';
import Tweet from '../components/Tweet';
import NewTweet from '../components/NewTweet';
import { firebaseStore, firebaseStorage } from '../firebase';
import useFirestore from '../hooks/useFirestore';
import FlipMove from 'react-flip-move';

const Home = ({ currentUser }) => {
  const tweets = useFirestore();

  const addTweet = (text, imgUrl) => {
    firebaseStore.collection('tweets').add({
      text,
      imgUrl,
      user: {
        avatar: currentUser.avatar,
        userName: currentUser.userName,
        email: currentUser.email
      },
      createdAt: Date.now(),
      creatorId: currentUser.uid
    });
  };

  const deleteTweet = (id, imgUrl) => {
    firebaseStore.collection('tweets').doc(id).delete();
    if (imgUrl) {
      firebaseStorage.refFromURL(imgUrl).delete();
    }
  };

  return (
    <div className="feed">
      <div className="feed__header">
        <h3>Home</h3>
      </div>
      <NewTweet currentUser={currentUser} addTweet={addTweet} />
      <ul>
        <FlipMove leaveAnimation="none">
          {tweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              tweet={tweet}
              isCreator={tweet.creatorId === currentUser.uid}
              deleteTweet={deleteTweet}
            />
          ))}
        </FlipMove>
      </ul>
    </div>
  );
};

export default Home;
