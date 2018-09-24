import React from 'react';
import SongList from './SongList';
import SongSearch from './SongSearch';

function Header() {
  return (
    <header className="flex">
      <style jsx>
        {`
          header {
            height: 50px;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            color: #fff;
            background-color: #ff5a00;
          }

          #song-list {
            width: 100%;
            position: absolute;
            top: 75px;
          }

          .flex {
            display: flex;
            align-items: center;
            justify-content: center;
          }

        `}
      </style>
      <h1>Redux Karaoke!</h1>
      <div id="song-list" className="flex">
        <SongList/>
        <SongSearch/>
      </div>
    </header>
  );
}

export default Header;
