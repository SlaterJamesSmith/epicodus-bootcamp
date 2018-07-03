import React from 'react';
import PropTypes from 'prop-types';

function ActionBar(props) {
  return (
    <section>
      <style jsx>
        {`
          section {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 10px 0 20px;
            border-top: 1px solid #ccc;
          }

          button {
            border: none;
            box-shadow: 0 5px 2px 0 #3339;
            border-radius: 10px;
            padding: 5px 20px;
            text-transform: uppercase;
            font-size: 2rem;
            color: white;
            margin: 10px;
            background-color: #008bff;
            outline: none;
            cursor: pointer;
          }

          button:active {
            box-shadow: 0 2px 2px 0 #3339;
            background-color: #0066dd;
          }
          `}
      </style>
      <button onClick={props.onFeed}>Feed</button>
      <button>Sleep</button>
      <button onClick={props.onPlay}>Play</button>
      <button onClick={props.onClean}>Clean</button>
    </section>
  );
}

ActionBar.propTypes = {
  onFeed: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onClean: PropTypes.func.isRequired
};

export default ActionBar;
