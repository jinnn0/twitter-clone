import { useState, useEffect } from 'react';
import { firebaseStore } from '../firebase';

const useFirestore = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const unsub = firebaseStore
      .collection('tweets')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        const tweets = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setTweets(tweets);
      });

    return () => unsub();
  }, []);

  return tweets;
};

export default useFirestore;
