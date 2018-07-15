import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SongList = ({ dispatch, songList }) => {
  let action;
  return (
    <section id="songs">
      <style jsx>
        {`
          #songs {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
          }

          h2 {
            height: 50px;
            display: flex;
            align-items: center;
            margin: 0 10px;
            padding: 10px 20px;
            border-radius: 4px;
            color: #fff;
            background-color: #ff5a00;
          }

          h3 {
            font-size: 1rem;
            text-transform: uppercase;
          }

          h4 {
            font-size: 0.8rem;
            font-weight: normal;
          }

          button {
            height: 50px;
            margin: 0 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border: 2px solid #ff5a00;
            border-radius: 4px;
            color: #ff5a00;
            background-color: transparent;
            cursor: pointer;
          }

          button:active {
            background-color: #ff5a0011;
          }
        `}
      </style>
      <h2>Songs</h2>
      {Object.keys(songList).map(songId => {
        let song = songList[songId];
        return (
          <button key={songId} onClick={() => {
            if (song.arrayPosition > 0) {
              action = {
                type: 'RESTART_SONG',
                currentSongId: songId
              };
              dispatch(action);
            }
            action = {
              type: 'CHANGE_SONG',
              newSelectedSongId: songId
            };
            dispatch(action);
          }}>
            <h3>{song.title}</h3>
            <h4>by {song.artist}</h4>
          </button>
        );
      })}
    </section>
  );
};

SongList.propTypes = {
  songList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    songList: state.songsById
  };
};

export default connect(mapStateToProps)(SongList);
