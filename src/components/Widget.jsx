import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterVideoEmbed
} from 'react-twitter-embed';

const Widget = () => {
  return (
    <div className="widget">
      <TwitterTimelineEmbed sourceType="profile" screenName="saurabhnemade" options={{ height: 400 }} />
      <TwitterTweetEmbed tweetId={'933354946111705097'} />
      <TwitterVideoEmbed id={'560070183650213889'} />
      <TwitterShareButton
        url={'https://facebook.com/saurabhnemade'}
        options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
      />
    </div>
  );
};

export default Widget;
