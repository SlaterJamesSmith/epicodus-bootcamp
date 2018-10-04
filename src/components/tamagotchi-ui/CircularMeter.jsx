import React from 'react';
import MeterDecal from './MeterDecal';
import PropTypes from 'prop-types';

function CircularMeter(props) {
  const statusColor = meterFillColor(props.meterValue);
  const actionable = {
    cursor: `${props.onAction ? 'pointer' : 'default'}`
  };
  const meterLevel = {
    height: `${props.meterValue / props.maxValue * 100}%`,
    borderBottom: `2px solid ${statusColor}`,
    backgroundColor: `${statusColor}`
  };

  function meterFillColor(meterValue) {
    if (meterValue > props.maxValue * 0.6) {
      return '#8f9';
    } else if (meterValue > props.maxValue * 0.25) {
      return '#fd0';
    } else {
      return '#f00';
    }
  }

  return (
    <div className="meter" style={actionable} onClick={props.onAction ? () => props.onAction() : () => {}}>
      <style jsx>
        {`
          .meter {
            height: 56px;
            width: 56px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px;
            border: 3px solid #888;
            border-radius: 100%;
            background: #fff;
            overflow: hidden;
            transition: border 0.2s;
          }

          .meter:active {
            border: 5px solid #f09;
            transition: border 0s;
          }

          .meter:active {
            transform: scale(0.95);
          }

          .meter-fill {
            width: 100%;
            position: absolute;
            bottom: 0;
            transition: height 1s, background-color 1s, border 1s;
          }
        `}
      </style>
      <div className="meter-fill" style={meterLevel}></div>
      <MeterDecal meterType={props.meterType}/>
    </div>
  );
}

CircularMeter.propTypes = {
  meterType: PropTypes.string.isRequired,
  meterValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  onAction: PropTypes.func
};

export default CircularMeter;
