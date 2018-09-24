import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SongDisplay = ({ song }) => {
  const { songArray, arrayPosition } = song;
  const currentLine = songArray[arrayPosition];

  return (
    <section className="flex">
      <style jsx>
        {`
          section {
            padding: 0 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          h1 {
            font-size: 3rem;
            line-height: 4rem;
            text-align: center;
          }
        `}
      </style>
      <h1>{currentLine}</h1>
    </section>
  );
};

SongDisplay.propTypes = {
  song: PropTypes.object
};

const mapStateToProps = state => {
  let songInfo;
  const song = state.songsById[state.currentSongId];
  if (!state.songsById[state.currentSongId].isFetching) {
    songInfo = {
      songArray: song.songArray,
      arrayPosition: song.arrayPosition
    };
  } else {
    songInfo = {
      songArray: '',
      arrayPosition: ''
    };
  }
  return {
    song: songInfo
  };
};

export default connect(mapStateToProps)(SongDisplay);
