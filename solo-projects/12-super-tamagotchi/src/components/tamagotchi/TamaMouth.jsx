import React from 'react';
import PropTypes from 'prop-types';

function TamaMouth(props) {
  const happiness = props.petStatus.foodLevel + props.petStatus.healthLevel + props.petStatus.playLevel;

  //TamaMouth CSS Animations
  const mouthAnimation = setEatAnimation();
  const vomitAnimation = setVomitAnimation();

  function setEatAnimation() {
    if (props.petConditions.activeStatus === 'eating') {
      return 'eating';
    } else {
      return 'idle';
    }
  }

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
    <div className="tama-mouth animate-idle">
      <style jsx>
        {`
          .tama-mouth {
            position: absolute;
            top: -30px;
          }

          .tama-mouth-inner {
            height: 12px;
            width: 100%;
            position: relative;
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
            z-index: 10;
          }

          .cookie-track {
            height: 30px;
            width: 20px;
            position: absolute;
            border-radius: 8px;
            overflow: hidden;
          }

          .cookie {
            width: 20px;
            height: 20px;
            opacity: 0;
            position: relative;
            margin: 0 auto;
            border-radius: 100%;
            background: #f1af38;
          }

          .vomit {
            height: 0;
            width: 100%;
            position: absolute;
            border-radius: 8px;
            background-color: #0f09;
          }

          @keyframes pucker {
            0% {width: 16px;}
            10% {width: 20px;}
            15% {width: 26px;}
            85% {width: 26px;}
            90% {width: 20px;}
            100% {width: 16px;}
          }

          @keyframes munch {
            0% {height: 12px;}
            50% {height: 1px;}
            100% {height: 12px;}
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

          @keyframes cookie {
            0% {opacity: 0; top: 10px;}
            10% {opacity: 1;}
            100% {opacity: 1; top: -25px;}
          }

          @keyframes vomit {
            0% {height: 0;}
            100% {height: 500px;}
          }

          .tama-mouth.animate-idle {
            animation:
              inertial-bounce 1s linear infinite,
              pucker 1s linear infinite;
          }

          .tama-mouth-inner.animate-eating {
            animation: munch 0.2s infinite;
          }

          .cookie.animate-eating {
            animation: cookie 1s linear forwards;
          }

          .vomit.animate-expel {
            animation: vomit 0.7s infinite;
          }
        `}
      </style>
      <div className={'tama-mouth-inner animate-' + mouthAnimation} style={mouthExpression}>
        <div className="tooth"></div>
        <div className="cookie-track">
          <div className={'cookie animate-' + mouthAnimation}></div>
        </div>
        <div className={'vomit animate-' + vomitAnimation}></div>
      </div>
    </div>
  );
}

TamaMouth.propTypes = {
  petStatus: PropTypes.object.isRequired,
  petConditions: PropTypes.object.isRequired
};

export default TamaMouth;
