import { useState, useEffect } from 'react';
import { firebaseStorage } from '../firebase';

const useFirestorage = (currentUser, file) => {
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

export default useFirestorage;
