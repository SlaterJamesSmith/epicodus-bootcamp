import React from "react";
import FeedSearch from "./FeedSearch";
import FeedPost from "./FeedPost";

function SocialFeed(){
  return (
    <div>
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
