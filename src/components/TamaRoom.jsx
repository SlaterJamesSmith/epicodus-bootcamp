import React from 'react';
import Tamagotchi from './tamagotchi/Tamagotchi';
import Poop from './tamagotchi/Poop';
import PropTypes from 'prop-types';

function TamaRoom(props) {

  //TamaRoom CSS Animations
  const playAnimation = setPlayAnimation();

  function setPlayAnimation() {
    if (props.petConditions.activeStatus === 'playing-1') {
      return 'animate-ball-right';
    } else if (props.petConditions.activeStatus === 'playing-2') {
      return 'animate-ball-left';
    }
  }

  return (
    <section className="tama-room-ext">
      <style jsx>
        {`
          .tama-room-ext {
            border: 4px dashed #f09;
            border-radius: 5px;
            overflow: hidden;
          }

          .tama-room-int {
            height: 462px;
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            background-color: #fff;
          }

          .ball {
            height: 100px;
            width: 100px;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            background: #ff6a00;
            overflow: hidden;
            visibility: hidden;
          }

          .center-line {
            height: 100%;
            position: absolute;
            border: 2px solid #823600;
          }

          .cross-line {
            width: 100%;
            position: absolute;
            border: 2px solid #823600;
          }

          .left-hemi, .right-hemi {
            height: 100px;
            width: 100px;
            position: absolute;
            border-radius: 100%;
            border: 4px solid #823600;
          }

          .left-hemi {
            right: 65%;
          }

          .right-hemi {
            left: 65%;
          }

          .vomit-pool {
            height: ${props.petConditions.vomitsOut * 25}px;
            width: 100%;
            position: absolute;
            bottom: 0;
            background-color: #0f08;
            cursor: pointer;
            transition: height 2s linear;
          }

          .litter-box {
            max-width: 400px;
            position: absolute;
            bottom: 25px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap-reverse;
            padding: 25px 0 0;
          }

          @keyframes ball-right {
            0% {top: 25px; left: -50px; transform: rotate(0deg);}
            5% {top: 30px;}
            30% {top: 300px;}
            53% {top: 95px;}
            55% {top: 100px;}
            57% {top: 95px;}
            60% {top: 90px;}
            85% {top: 300px;}
            95 % {top: 175px;}
            100% {top: 200px; left: 500px; transform: rotate(270deg);}
          }

          @keyframes ball-left {
            0% {top: 25px; right: -50px; transform: rotate(0deg);}
            5% {top: 30px;}
            30% {top: 300px;}
            53% {top: 95px;}
            55% {top: 100px;}
            57% {top: 95px;}
            60% {top: 90px;}
            85% {top: 300px;}
            95 % {top: 175px;}
            100% {top: 200px; right: 500px; transform: rotate(-270deg);}
          }

          .ball.animate-ball-right {
            visibility: visible;
            animation: ball-right 1s linear forwards;
          }

          .ball.animate-ball-left {
            visibility: visible;
            animation: ball-left 1s linear forwards;
          }
        `}
      </style>
      <div className="tama-room-int">
        <div className={'ball ' + playAnimation}>
          <div className="left-hemi"></div>
          <div className="center-line"></div>
          <div className="cross-line"></div>
          <div className="right-hemi"></div>
        </div>
        <Tamagotchi
          petStatus={props.petStatus}
          petConditions={props.petConditions}
        />
        <div className="vomit-pool" onClick={() => props.onDrainVomit()}></div>
        <div className="litter-box">
          {Object.keys(props.petConditions.poopsOut).map(poopId => {
            return (
              <Poop
                poopId={poopId}
                poopStatus={props.petConditions.poopsOut[poopId].status}
                onScoopPoop={props.onScoopPoop}
                key={poopId}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

TamaRoom.propTypes = {
  petStatus: PropTypes.object.isRequired,
  petConditions: PropTypes.object.isRequired,
  onDrainVomit: PropTypes.func.isRequired,
  onScoopPoop: PropTypes.func.isRequired
};

export default TamaRoom;
