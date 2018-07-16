import React from 'react';
import { fetchSongId } from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function SongSearch({ dispatch }) {
  let input;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      dispatch(fetchSongId(input.value.trim()));
      input.value = null;
    }}>
      <style jsx>
        {`
          form {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 20px;
          }

          input, button {
            margin-right: 20px;
            padding: 5px 10px;
            border: 1px solid #ff5a00;
            border-radius: 4px;
          }

          button {
            color: #fff;
            background-color: #ff5a00;
            font-weight: bold;
            cursor: pointer;
          }
        `}
      </style>
      <input placeholder="Song Title" ref={node => { input = node; }}></input>
      <button>Search</button>
    </form>
  );
}

SongSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(SongSearch);
