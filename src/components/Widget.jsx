import React from 'react';
import { TwitterShareButton, TwitterTweetEmbed, TwitterVideoEmbed } from 'react-twitter-embed';

const Widget = () => {
  return (
    <div className="widget">
      <TwitterTweetEmbed tweetId={'1175348725725761537'} />
      <TwitterVideoEmbed id={'1325112938626228226'} />
      <TwitterTweetEmbed tweetId={'1292440518186749953'} />
      <TwitterShareButton
        url={'https://facebook.com/saurabhnemade'}
        options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
      />
    </div>
  );
};

export default Widget;
