import React from 'react';
import FeedSearch from './FeedSearch';
import FeedPost from './FeedPost';

function SocialFeed(){
  const socialFeed = {
    fontFamily: 'sans-serif',
    border: '2px solid #ccc'
  };

  return (
    <div style={socialFeed}>
      <FeedSearch/>
      <FeedPost
        title="React @Epicodus"
        msg="Looking forward to school today!"/>
      <FeedPost
        title="Don't Drink and Code"
        msg="Oh no! My code is a mess!"/>
      <FeedPost
        title="Farewell Avanti"
        msg="I'm gonna miss the frozen treats!"/>
      <FeedPost
        title="Short people are real people too!"
        msg="no..."/>
      <FeedPost
        title="Internship Week"
        msg="Don't forget to write your cover letters!"/>
    </div>
  );
}

export default SocialFeed;
