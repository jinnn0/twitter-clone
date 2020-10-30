import { useState, useEffect } from 'react';
import { firebaseStore, firebaseStorage } from '../firebase';

const useStore = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const unsub = firebaseStore
      .collection('tweets')
      .orderBy('createdAt', 'asc')
      .onSnapshot((snap) => {
        const tweets = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setTweets(tweets);
      });

    return () => unsub();
  }, []);

  return tweets;
};

const useStorage = (currentUser, file) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (file) {
      const storageRef = firebaseStorage.ref(`${currentUser.email}/${file.name}`);
      storageRef.put(file).on('state_change', null, null, async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      });
    }
  }, [file, currentUser]);

  return [url, setUrl];
};

export { useStore, useStorage };
