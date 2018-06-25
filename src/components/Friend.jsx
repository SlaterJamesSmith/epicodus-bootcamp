import React from "react";

function Friend(){
  const friend = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "20px"
  };

  const friendImg = {
    height: "50px",
    width: "50px",
    minWidth: "50px",
    borderRadius: "100%",
    backgroundColor: "#ccc",
    marginRight: "20px"
  };

  const h3 = {
    margin: "0 0 5px",
    color: "#333",
    fontWeight: "normal",
    fontSize: "16px"
  };

  const button = {
    backgroundColor: "#2d96de",
    color: "white",
    borderRadius: "0",
    padding: "5px 15px"
  };

  return (
  <div style={friend}>
    <div style={friendImg} className="img"></div>
    <div>
      <h3 style={h3}>Thato Haley</h3>
      <button style={button}>Message</button>
    </div>
  </div>
  );
}

export default Friend;
