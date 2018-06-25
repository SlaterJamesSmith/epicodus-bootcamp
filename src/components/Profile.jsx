import React from "react";

function Profile(){
  const profile = {
    fontFamily: "sans-serif",
    position: "relative",
    height: "250px",
    border: "2px solid #ccc",
    overflow: "hidden",
    marginBottom: "10px"
  };

  const background = {
    backgroundColor: "#2d96de",
    height: "150px",
    width: "100%",
    borderBottom: "3px solid #ccc"
  };

  const profileGroup = {
    position: "absolute",
    top: "100px",
    left: "30px"
  };

  const profileSubGroup = {
    display: "flex",
    alignItems: "flex-end"
  };

  const h1 = {
    margin: "0 20px",
    fontSize: "24px"
  }

  const profileImg = {
    height: "80px",
    width: "80px",
    borderRadius: "10px",
    backgroundColor: "#2d96de",
    border: "3px solid #fff"
  }

  const links = {
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
    padding: "0"
  }

  return (
    <div style={profile}>
      <div style={background} className="background"></div>
      <div style={profileGroup}>
        <div style={profileSubGroup}>
          <div style={profileImg} className="img"></div>
          <h1 style={h1}>Thato Haley</h1>
        </div>
        <ul style={links}>
          <li>Tweets</li>
          <li>Following</li>
          <li>Followers</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
