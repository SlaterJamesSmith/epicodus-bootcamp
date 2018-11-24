import React from 'react';
import PropTypes from 'prop-types';

function TamaHead(props) {
  const happiness = props.petStatus.foodLevel + props.petStatus.healthLevel + props.petStatus.playLevel;

  //TamaMouth CSS Animations
  const headAnimation = setHeadAnimation();

  function setHeadAnimation() {
    if (props.petConditions.activeStatus === 'exercising') {
      return 'exercising';
    }
  }

  //TamaHead CSS Transformations
  const headSize = setHeadSize(props.petStatus);
  const complexion = setComplexion(props.petStatus);

  function setHeadSize(status) {
    if (happiness > 180) {
      return {transform: `scale(${props.petConditions.mealsToDigest * 0.2 + 1})`};
    } else if (happiness > 75) {
      return {transform: `scale(${props.petConditions.mealsToDigest * 0.2 + 1})`};
    } else {
      return {transform: `scale(${props.petConditions.mealsToDigest * 0.2 + 1})`};
    }
  }

  function setComplexion(status) {
    if (happiness > 180) {
      return {backgroundColor: '#f09'};
    } else if (happiness > 75) {
      return {backgroundColor: '#f6c'};
    } else {
      return {backgroundColor: '#fce'};
    }
  }

  return (
    <div className="tama-head-container animate-idle" style={headSize}>
      <style jsx>
        {`
          .tama-head-container {
            height: 100px;
            width: 100px;
            position: absolute;
            bottom: 0;
            display: flex;
            justify-content: center;
            transition: transform 1s;
          }

          .tama-head {
            height: 100%;
            width: 100%;
            position: absolute;
            bottom: 0;
            border-radius: 100%;
            background-color: #f09;
            transition: background-color 1s;
          }

          @keyframes bounce-volume-displace {
            0% {height: 90px; width: 115px;}
            5% {height: 92px; width: 113px;}
            20% {height: 100px; width: 100px;}
            80% {height: 100px; width: 100px;}
            95% {height: 92px; width: 113px;}
            100% {height: 90px; width: 115px;}
          }

          @keyframes shape-up {
            0% {height: 100%; width: 100%; border-radius: 100%;}
            50% {height: 110%; width: 120%; border-radius: 20%;}
            100% {height: 100%; width: 100%; border-radius: 100%;}
          }

          .tama-head-container.animate-idle {
            animation: bounce-volume-displace 1s linear infinite;
          }

          .tama-head.animate-exercising {
            animation: shape-up 0.5s linear infinite;
          }
        `}
      </style>
      <div className={'tama-head animate-' + headAnimation} style={complexion}></div>
    </div>
  );
}

TamaHead.propTypes = {
  petStatus: PropTypes.object.isRequired,
  petConditions: PropTypes.object.isRequired
};

export default TamaHead;
