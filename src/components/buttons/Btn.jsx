import React from 'react';
import PropTypes from 'prop-types';

function Btn(props) {
  return (
    <button type='text'>
      <style jsx>
        {`
          button {
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            background-color: #4285f4;
            color: #fff;
            text-transform: uppercase;
          }
        `}
      </style>
      {props.btnText}
    </button>
  );
}

Btn.propTypes = {
  btnText: PropTypes.string.isRequired
};

export default Btn;
