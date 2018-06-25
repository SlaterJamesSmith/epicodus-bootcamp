import React from "react";
import FeedSearch from "./FeedSearch";
import FeedPost from "./FeedPost";

function SocialFeed(){
  const socialFeed = {
    fontFamily: "sans-serif",
    border: "2px solid #ccc"
  };

  return (
    <div style={socialFeed}>
      <FeedSearch/>
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </div>
  );
}

export default SocialFeed;
