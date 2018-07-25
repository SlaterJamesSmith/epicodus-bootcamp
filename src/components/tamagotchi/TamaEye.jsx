import React from 'react';
import PropTypes from 'prop-types';

function TamaEye(props) {
  const happiness = props.petStatus.foodLevel + props.petStatus.healthLevel + props.petStatus.playLevel;
  const poopCount = Object.keys(props.petConditions.poopsOut).length;

  //TamaEye CSS Animations
  const eyeAnimation = setEyeAnimation();
  const pupilAnimation = 'blink';

  function setEyeAnimation() {
    if (happiness < 75 && poopCount > 0) {
      return 'paranoid-look-down';
    } else if (happiness < 75) {
      return 'paranoid';
    } else if (poopCount > 0) {
      return 'look-down';
    }
  }

  //TamaEye CSS Transformations
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
    <div className={'tama-eye animate-' + eyeAnimation} style={eyeExpression}>
      <style jsx>
        {`
          .tama-eye {
            min-height: 32px;
            min-width: 32px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 4px solid #fff;
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
            top: 0;
            border-radius: 100%;
            background-color: #fff;
          }

          @keyframes look-left-right-down {
            0% {justify-content: center;}
            20% {justify-content: flex-start;}
            40% {justify-content: flex-end;}
            60% {align-items: center; justify-content: center;}
            80% {align-items: flex-end; justify-content: center;}
            100% {align-items: center; justify-content: center;}
          }

          @keyframes look-left-right {
            0% {justify-content: center;}
            33% {justify-content: flex-start;}
            66% {justify-content: flex-end;}
            100% {justify-content: center;}
          }

          @keyframes look-down {
            0% {align-items: center;}
            50% {align-items: flex-end;}
            100% {align-items: center;}
          }

          @keyframes eye-blink {
            48% {transform: scaleY(1);}
            50% {transform: scaleY(0.1);}
            52% {transform: scaleY(1);}
          }

          .tama-eye.animate-paranoid-look-down {
            animation: look-left-right-down 10s infinite;
          }

          .tama-eye.animate-paranoid {
            animation: look-left-right 5s infinite;
          }

          .tama-eye.animate-look-down {
            animation: look-down 5s infinite;
          }

          .pupil.animate-blink {
            animation: eye-blink 6s infinite;
          }
        `}
      </style>
      <div className={'pupil animate-' + pupilAnimation} style={pupilExpression}></div>
      <div className="eye-light"></div>
    </div>
  );
}

TamaEye.propTypes = {
  petStatus: PropTypes.object.isRequired,
  petConditions: PropTypes.object.isRequired
};

export default TamaEye;
