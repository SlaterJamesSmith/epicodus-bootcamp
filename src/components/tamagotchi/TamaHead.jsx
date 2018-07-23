import React from 'react';
import PropTypes from 'prop-types';

function TamaHead(props) {
  const expression = checkMood(props.petStatus);

  function checkMood(status) {
    let happiness = status.foodLevel + status.healthLevel + status.playLevel;
    if (happiness > 180) {
      return {
        backgroundColor: '#f09'
      };
    } else if (happiness > 75) {
      return {
        backgroundColor: '#f6c'
      };
    } else {
      return {
        backgroundColor: '#fce'
      };
    }
  }

  return (
    <div className="tama-head animate-idle" style={expression}>
      <style jsx>
        {`
          .tama-head {
            height: 100px;
            width: 100px;
            position: absolute;
            bottom: 0;
            border-radius: 100%;
            background-color: #f09;
            transition: transform 1s, background-color 1s;
          }

          @keyframes bounce-volume-displace {
            0% {height: 90px; width: 115px;}
            5% {height: 92px; width: 113px;}
            20% {height: 100px; width: 100px;}
            80% {height: 100px; width: 100px;}
            95% {height: 92px; width: 113px;}
            100% {height: 90px; width: 115px;}
          }

          .animate-idle {
            animation: bounce-volume-displace 1s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

TamaHead.propTypes = {
  petStatus: PropTypes.object.isRequired
};

export default TamaHead;
