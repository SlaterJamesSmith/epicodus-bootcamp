import React from 'react';
import PropTypes from 'prop-types';

function TamaMouth(props) {
  const happiness = props.petStatus.foodLevel + props.petStatus.healthLevel + props.petStatus.playLevel;

  //TamaMouth CSS Animations
  const mouthAnimation = 'idle';
  const vomitAnimation = setVomitAnimation();

  function setVomitAnimation() {
    if (props.petConditions.activeStatus === 'vomiting') {
      return 'expel';
    }
  }

  //TamaMouth CSS Transformations
  const mouthExpression = setMouthShape();

  function setMouthShape() {
    const activeStatus = props.petConditions.activeStatus;
    if (happiness > 180 && activeStatus !== 'vomiting') {
      return {borderBottomLeftRadius: '100%', borderBottomRightRadius: '100%', height: '20px'};
    } else if (happiness > 75  && activeStatus !== 'vomiting') {
      return {borderBottomLeftRadius: '75%', borderBottomRightRadius: '75%'};
    } else {
      return {borderTopLeftRadius: '100%', borderTopRightRadius: '100%', height: '15px'};
    }
  }

  return (
    <div className={'tama-mouth animate-' + mouthAnimation} style={mouthExpression}>
      <style jsx>
        {`
          .tama-mouth {
            height: 12px;
            width: 20px;
            position: absolute;
            top: -30px;
            display: flex;
            justify-content: center;
            border-radius: 5px;
            background-color: #704;
            transition: height 1s, border-radius 1s;
          }

          .tooth {
            height: 4px;
            width: 6px;
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
            background-color: #fff;
          }

          .vomit {
            height: 0;
            width: 100%;
            position: absolute;
            border-radius: 20px;
            background-color: #0f09;
          }

          @keyframes pucker {
            0% {width: 12px;}
            10% {width: 16px;}
            15% {width: 20px;}
            85% {width: 20px;}
            90% {width: 16px;}
            100% {width: 12px;}
          }

          @keyframes munch {
            0% {height: 12px;}
            100% {height: 1px;}
          }

          @keyframes inertial-bounce {
            0% {transform: translateY(0);}
            10% {transform: translateY(4px);}
            40% {transform: translateY(2px);}
            50% {transform: translateY(0px);}
            60% {transform: translateY(-2px);}
            90% {transform: translateY(-4px);}
            100% {transform: translateY(0);}
          }

          @keyframes vomit {
            0% {height: 0;}
            100% {height: 500px;}
          }

          .tama-mouth.animate-idle {
            animation:
              pucker 1s linear infinite,
              inertial-bounce 1s linear infinite;
          }

          .tama-mouth.animate-eating {
            animation:
              munch 0.25s alternate infinite;
              inertial-bounce 1s linear infinite;
          }

          .vomit.animate-expel {
            animation: vomit 0.7s infinite;
          }
        `}
      </style>
      <div className="tooth"></div>
      <div className={'vomit animate-' + vomitAnimation}></div>
    </div>
  );
}

TamaMouth.propTypes = {
  petStatus: PropTypes.object.isRequired,
  petConditions: PropTypes.object.isRequired
};

export default TamaMouth;
