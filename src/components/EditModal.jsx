import React from 'react';

const EditModal = ({ editTweet, setUpdatedTweet, setShouldModalOpen }) => {
  return (
    <form onSubmit={(e) => editTweet(e)}>
      <input type="text" onChange={(e) => setUpdatedTweet(e.target.value)} />
      <input type="submit" value="Update tweet" />
      <button type="submit" onClick={() => setShouldModalOpen(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditModal;
