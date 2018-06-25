import React from "react";

function Profile(){
  return (
    <div>
      <div className="background"></div>
      <div>
        <div>
          <div className="img"></div>
          <h1>Profile Name</h1>
        </div>
        <ul>
          <li>Tweets</li>
          <li>Following</li>
          <li>Followers</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
