import { useState, useEffect } from 'react';
import { firebaseStorage } from '../firebase';

const useFirestorage = (currentUser, file, imgUpload) => {
  const [imgUrl, setImgUrl] = useState(imgUpload ? '' : currentUser.avatar);

  useEffect(() => {
    if (file) {
      const filePath = `${currentUser.email}/${imgUpload ? 'images upload' : 'avatar'}/ ${file.name}`;
      const storageRef = firebaseStorage.ref(filePath);
      storageRef.put(file).on('state_change', null, null, async () => {
        const url = await storageRef.getDownloadURL();
        setImgUrl(url);
      });
    }
  }, [file, currentUser]);

  return [imgUrl, setImgUrl];
};

export default useFirestorage;
