import React from 'react';
import TamaMouth from './TamaMouth';
import PropTypes from 'prop-types';

function Tamagotchi(props) {
  function setMood(level) {
    let currentMood;
    if (level > 65) {
      currentMood = 'happy';
    } else if (level > 35) {
      currentMood = 'neutral';
    } else {
      currentMood = 'sad';
    }
    return currentMood;
  }

  return(
    <section>
      <style jsx>
        {`
          section {
            height: 100%;
            position: relative;
          }

          .tamagotchi-root {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            bottom: 15%;
          }

          .tamagotchi {
            height: 175px;
            width: 200px;
            position: absolute;
            bottom: 0;
            transform-origin: bottom;
            border-radius: 100%;
            background-color: #e00;
            z-index: 10;
            animation: bounce 1.25s linear infinite;
          }

          .shadow {
            height: 50px;
            width: 200px;
            position: absolute;
            bottom: -20px;
            transform-origin: bottom;
            border-radius: 100%;
            background-color: #333a;
            animation: shadow-bounce 1.25s linear infinite;
          }

          @keyframes bounce {
            0% {transform: scale(1.1, 0.9) translate(0, 0);}
            5% {transform: scale(1, 1) translate(0, 0);}
            25% {transform: scale(0.9, 1.1) translate(0, -50px);}
            50% {transform: scale(1, 0.95) translate(0, -100px);}
            75% {transform: scale(0.9, 1.1) translate(0, -50px);}
            95% {transform: scale(1, 1) translate(0, 0);}
            100% {transform: scale(1.1, 0.9) translate(0, 0);}
          }

          @keyframes shadow-bounce {
            0% {transform: scale(1.1); background-color: #333a; filter: blur(2px);}
            5% {transform: scale(1); background-color: #333a; filter: blur(3px);}
            50% {transform: scale(0.75); background-color: #3339; filter: blur(12px);}
            95% {transform: scale(1); background-color: #333a; filter: blur(3px);}
            100% {transform: scale(1.1); background-color: #333a; filter: blur(2px);}
          }

          .eye-left {
            height: 30px;
            width: 30px;
            position: absolute;
            top: 60px;
            left: 30px;
            border-radius: 100%;
            background-color: #000;
          }

          .eye-right {
            height: 30px;
            width: 30px;
            position: absolute;
            top: 60px;
            right: 60px;
            border-radius: 100%;
            background-color: #000;
          }

          .eye-light {
            height: 15px;
            width: 15px;
            position: absolute;
            top: 0px;
            right: 10px;
            border-radius: 100%;
            background-color: #fff;
          }
        `}
      </style>
      <div className='tamagotchi-root'>
        <div className='tamagotchi'>
          <div className='eye-left'>
            <div className='eye-light'></div>
          </div>
          <div className='eye-right'>
            <div className='eye-light'></div>
          </div>
          <TamaMouth
            mood={setMood(props.happinessLevel)}
          />
        </div>
        <div className='shadow'></div>
      </div>
    </section>
  );
}

Tamagotchi.propTypes = {
  happinessLevel: PropTypes.number.isRequired
};

export default Tamagotchi;
