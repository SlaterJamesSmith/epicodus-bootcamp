import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Bio from "./Bio";
import SocialFeed from "./SocialFeed";
import FriendsList from "./FriendsList";

function App(){
  const main = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "10px",
    padding: "10px",
  };



  return (
    <div>
      <Navbar/>
      <div style={main}>
        <div>
          <Profile/>
          <Bio/>
        </div>
        <SocialFeed/>
        <FriendsList/>
      </div>
    </div>
  );
}

export default App;
