import React from 'react';
import PropTypes from 'prop-types';

function Meter(props) {
  const STATUS_STYLE = {
    width: `${props.level}%`,
    backgroundColor: `${props.color}`,
    borderLeft: `1px solid ${props.color}`
  };

  return (
    <div className='meter-container'>
      <style jsx>
        {`
          .meter-container {
            position: relative;
          }

          .meter {
            height: 16px;
            transition: width 1s, background-color 1s, border 1s;
          }

          p {
            position: absolute;
            top: 0;
            margin: 0;
            left: 42%;
            font-size: 0.8rem;
          }
        `}
      </style>
      <p>{props.level}%</p>
      <div style={STATUS_STYLE} className='meter'></div>
    </div>
  );
}

Meter.propTypes = {
  level: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Meter;
