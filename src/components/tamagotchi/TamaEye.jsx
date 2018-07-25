import React from 'react';
import PropTypes from 'prop-types';

function TamaEye(props) {
  const happiness = props.petStatus.foodLevel + props.petStatus.healthLevel + props.petStatus.playLevel;
  const eyeExpression = setEyeBags();
  const pupilExpression = setPupilSize();

  function setEyeBags() {
    if (happiness > 150) {
      return {boxShadow: '0 0 0 0 #0000'};
    } else if (happiness > 100) {
      return {boxShadow: '0 2px 0 0 #0002'};
    } else if (happiness > 50) {
      return {boxShadow: '0 4px 0 0 #0002'};
    } else {
      return {boxShadow: '0 8px 0 1px #0002'};
    }
  }

  function setPupilSize() {
    if (happiness > 180) {
      return {height: '20px', width: '20px'};
    } else if (happiness > 75) {
      return {height: '14px', width: '14px'};
    } else {
      return {height: '6px', width: '6px'};
    }
  }

  return (
    <div className="tama-eye" style={eyeExpression}>
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
            transition: box-shadow 2s;
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
      <div className="pupil animate-idle" style={pupilExpression}></div>
      <div className="eye-light"></div>
    </div>
  );
}

TamaEye.propTypes = {
  petStatus: PropTypes.object.isRequired
};

export default TamaEye;
