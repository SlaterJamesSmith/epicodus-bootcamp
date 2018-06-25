import React from "react";

function Navbar(){
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Notifications</li>
        <li>Messages</li>
      </ul>
      <input placeholder="Search"></input>
      <button>Tweet</button>
    </div>
  );
}

export default Navbar;
