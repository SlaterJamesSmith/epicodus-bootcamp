import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Bio from "./Bio";
import SocialFeed from "./SocialFeed";
import FriendsList from "./FriendsList";

function App(){
  return (
    <div>
      <Navbar/>
      <Profile/>
      <Bio/>
      <SocialFeed/>
      <FriendsList/>
    </div>
  );
}

export default App;
