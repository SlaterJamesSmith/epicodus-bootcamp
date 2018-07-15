import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Footer = ({ dispatch, song}) => {
  const { artist, title, songArray, arrayPosition, id } = song;
  let action;

  return (
    <footer>
      <style jsx>
        {`
          footer {
            height: 100px;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            color: #fff;
            background-color: #ff5a00;
          }

          footer button {
            height: 100px;
            width: 100%;
            border: none;
            color: #fff;
            text-transform: uppercase;
            background-color: transparent;
            cursor: pointer;
          }

          footer button:active {
            background-color: #e35000;
          }

          #lyric-number {
            height: 50px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -75px;
            color: #ff5a00;
            text-align: center;
          }

          h1 {
            font-size: 1.4rem;
          }

          h2 {
            color: #000;
            font-size: 1rem;
            line-height: 1.5rem;
          }
        `}
      </style>
      <div id="lyric-number">
        <h1>{title}</h1>
        <h2>by {artist}</h2>
        <h3>{arrayPosition + 1} / {songArray.length}</h3>
      </div>
      <button onClick={e => {
        e.preventDefault();
        if (arrayPosition < songArray.length - 1) {
          action = {
            type: 'NEXT_LYRIC',
            currentSongId: id
          };
        } else {
          action = {
            type: 'RESTART_SONG',
            currentSongId: id
          };
        }
        dispatch(action);
      }}>
        <h1>Next</h1>
      </button>
    </footer>
  );
};

Footer.propTypes = {
  song: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  const song = state.songsById[state.currentSongId];
  const songInfo = {
    id: song.songId,
    artist: song.artist,
    title: song.title,
    songArray: song.songArray,
    arrayPosition: song.arrayPosition
  };
  return {
    song: songInfo
  };
};

export default connect(mapStateToProps)(Footer);
