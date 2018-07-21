import React from 'react';
import PropTypes from 'prop-types';

function StatusMeter(props) {
  const meterLevel = {
    height: `${props.statusValue / 100 * 50}px`,
    borderBottom: `2px solid ${meterFillColor(props.statusValue)}`,
    backgroundColor: `${meterFillColor(props.statusValue)}`
  };

  function meterFillColor(statusValue) {
    if (statusValue > 60) {
      return '#0f9';
    } else if (statusValue > 25) {
      return '#fe0';
    } else {
      return '#e00';
    }
  }

  return (
    <div className="meter">
      <style jsx>
        {`
          .meter {
            height: 54px;
            width: 54px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px;
            border: 2px solid #f09;
            border-radius: 100%;
            overflow: hidden;
          }

          .meter-fill {
            height: 50px;
            width: 100%;
            position: absolute;
            bottom: 0;
            z-index: -10;
            transition: height 1s, background-color 1s;
          }

          h3 {
            color: #f09;
          }
        `}
      </style>
      <div className="meter-fill" style={meterLevel}></div>
      <h3>{props.statusType}</h3>
    </div>
  );
}

StatusMeter.propTypes = {
  statusType: PropTypes.string.isRequired,
  statusValue: PropTypes.number.isRequired
};

export default StatusMeter;
