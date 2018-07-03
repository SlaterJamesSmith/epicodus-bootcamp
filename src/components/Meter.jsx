import React from 'react';
import PropTypes from 'prop-types';

function Meter(props) {
  const STATUS_STYLE = {
    width: `${props.level}%`,
    backgroundColor: '#46da46',
  };

  return (
    <div>
      <style jsx>
        {`
          .meter {
            height: 16px;
            transition: width 1s;
          }

          p {
            font-size: 0.8rem;
            text-align: center;
          }
        `}
      </style>
      <p>{props.level}%</p>
      <div style={STATUS_STYLE} className='meter'></div>
    </div>
  );
}

Meter.propTypes = {
  level: PropTypes.number.isRequired
};

export default Meter;
