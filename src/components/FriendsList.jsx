import React from "react";
import Friend from "./Friend";


function FriendsList(){
  const friendsList = {
    border: "2px solid #ccc",
    padding: "10px 25px",
    fontFamily: "sans-serif"
  };

  const h2 = {
    fontSize: "18px",
    color: "#333"
  };

  return (
    <div style={friendsList}>
      <h2 style={h2}>Friends List</h2>
      <Friend
        name="Mike"/>
      <Friend
        name="Matt"/>
      <Friend
        name="Mark"/>
    </div>
  );
}

export default FriendsList;
