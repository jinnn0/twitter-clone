import React, { useState } from 'react';
import EditModal from '../components/EditModal';
import Tweet from '../components/Tweet';
import TweetForm from '../components/TweetForm';
import { firebaseStore, firebaseStorage } from '../firebase';
import { useStore } from '../hooks/firebaseHooks';

const Home = ({ currentUser }) => {
  const tweets = useStore();
  const [shouldModalOpen, setShouldModalOpen] = useState(false);
  const [targetTweet, setTargetTweet] = useState(null);
  const [updatedTweet, setUpdatedTweet] = useState('');

  const addTweet = (text, url) => {
    firebaseStore.collection('tweets').add({ text, url, createdAt: Date.now(), creatorId: currentUser.uid });
  };

  const deleteTweet = (id, url) => {
    let isOk = window.confirm('Are you sure you want to delete ?');
    if (isOk) {
      firebaseStore.collection('tweets').doc(id).delete();
      if (url) {
        firebaseStorage.refFromURL(url).delete();
      }
    } else {
    }
  };

  const editTweet = (e) => {
    e.preventDefault();
    firebaseStore.collection('tweets').doc(targetTweet.id).update({ text: updatedTweet });
    setShouldModalOpen(false);
    setUpdatedTweet('');
  };

  const openEditModal = (tweet) => {
    setShouldModalOpen(true);
    setTargetTweet(tweet);
  };

  console.log(currentUser);

  return (
    <div className="home">
      <TweetForm currentUser={currentUser} addTweet={addTweet} />
      <ul className="tweets">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            isCreator={tweet.creatorId === currentUser.uid}
            deleteTweet={deleteTweet}
            openEditModal={openEditModal}
          />
        ))}
      </ul>
      {shouldModalOpen && (
        <EditModal
          updatedTweet={updatedTweet}
          editTweet={editTweet}
          setUpdatedTweet={setUpdatedTweet}
          setShouldModalOpen={setShouldModalOpen}
        />
      )}
    </div>
  );
};

export default Home;
