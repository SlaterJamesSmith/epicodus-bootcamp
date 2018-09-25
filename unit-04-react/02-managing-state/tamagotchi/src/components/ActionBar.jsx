import React from 'react';
import PropTypes from 'prop-types';

function ActionBar(props) {
  return (
    <section>
      <style jsx>
        {`
          section {
            height: 75px;
            width: 100%;
            position: absolute;
            bottom: 0;
            display: flex;
            justify-content: center;
            padding: 10px 0 20px;
            z-index: 100;
          }

          button {
            margin: 10px;
            padding: 5px 20px;
            border: none;
            border-radius: 10px;
            box-shadow: 0 5px 2px 0 #3339;
            color: white;
            background-color: #46c550;
            font-size: 2rem;
            text-transform: uppercase;
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
      <button onClick={props.onSleep}>Sleep</button>
      <button onClick={props.onPlay}>Play</button>
      <button onClick={props.onClean}>Clean</button>
    </section>
  );
}

ActionBar.propTypes = {
  onFeed: PropTypes.func.isRequired,
  onSleep: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onClean: PropTypes.func.isRequired
};

export default ActionBar;
