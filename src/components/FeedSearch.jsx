import React from "react";

function FeedSearch(){
  const feedSearch = {
    backgroundColor: "#2d96de",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const button = {
    backgroundColor: "#dc0d6a",
    color: "white",
    borderRadius: "5px",
    padding: "5px 15px",
    marginRight: "20px",
    border: "none"
  };

  const input = {
    width: "50%",
    borderRadius: "5px",
    padding: "5px 15px",
    border: "none"
  };

  return (
    <div style={feedSearch}>
      <button style={button}>Go</button>
      <input style={input} placeholder="What's happening?"></input>
    </div>
  );
}

export default FeedSearch;
