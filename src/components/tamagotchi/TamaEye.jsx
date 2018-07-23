import React from 'react';
import PropTypes from 'prop-types';

function TamaEye(props) {
  const expression = checkMood(props.petStatus);

  function checkMood(status) {
    let happiness = status.foodLevel + status.energyLevel + status.playLevel;
    if (happiness > 180) {
      return {
        height: '20px',
        width: '20px'
      };
    } else if (happiness > 75) {
      return {
        height: '14px',
        width: '14px'
      };
    } else {
      return {
        height: '6px',
        width: '6px'
      };
    }
  }

  return (
    <div className="tama-eye">
      <style jsx>
        {`
          .tama-eye {
            min-height: 30px;
            min-width: 30px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #fff;
            border-radius: 100%;
            background-color: #fff;
          }

          .pupil {
            height: 24px;
            width: 24px;
            border-radius: 100%;
            background-color: #000;
            transition: height 1s, width 1s;
          }

          .eye-light {
            height: 10px;
            width: 10px;
            position: absolute;
            top: 2px;
            border-radius: 100%;
            background-color: #fff;
          }

          @keyframes eye-blink {
            48% {transform: scaleY(1);}
            50% {transform: scaleY(0.1);}
            52% {transform: scaleY(1);}
          }

          .pupil.animate-idle {
            animation: eye-blink 5s infinite;
          }
        `}
      </style>
      <div className="pupil animate-idle" style={expression}></div>
      <div className="eye-light"></div>
    </div>
  );
}

TamaEye.propTypes = {
  petStatus: PropTypes.object.isRequired
};

export default TamaEye;
