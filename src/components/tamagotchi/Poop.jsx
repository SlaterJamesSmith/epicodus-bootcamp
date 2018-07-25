import React from 'react';
import PropTypes from 'prop-types';

function Poop(props) {
  const poopStatus = checkStatus(props.poopStatus);

  function checkStatus(status) {
    if (status === 'scooped') {
      return {
        maxWidth: '0',
        opacity: '0'
      };
    }
  }

  return (
    <div className="poop" style={poopStatus} onClick={() => props.onScoopPoop(props.poopId)}>
      <style jsx>
        {`
          .poop {
            max-width: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: max-width 0.5s, opacity 0.5s;
            animation: bounce 0.75s ease-in-out infinite;
          }

          .poop-base, .poop-middle, .poop-top {
            position: relative;
            border-radius: 20px;
            background-color: #c93;
            box-shadow: 0 0 4px 2px #0002;
          }

          .poop-base {
            height: 20px;
            width: 50px;
            animation: materialize 0.5s forwards, growth-base 0.5s forwards;
          }

          .poop-middle {
            height: 14px;
            width: 30px;
            margin-bottom: -2px;
            animation: materialize 1s forwards, growth-middle 1s forwards;
          }

          .poop-top {
            height: 14px;
            width: 14px;
            margin-bottom: -2px;
            animation: materialize 1.2s forwards, growth-top 1.2s forwards;
          }

          @keyframes materialize {
            0% {box-shadow: 0 0 4px 2px #0000; transform: translateY(-10px);}
            100% {box-shadow: 0 0 4px 2px #0002; transform: translateY(0px);}
          }

          @keyframes growth-base {
            0% {height: 0px; width: 0px;}
            100% {height: 20px; width: 50px;}
          }

          @keyframes growth-middle {
            0% {height: 0px; width: 0px;}
            100% {height: 14px; width: 30px;}
          }

          @keyframes growth-top {
            0% {height: 0px; width: 0px;}
            100% {height: 14px; width: 14px;}
          }

          @keyframes bounce {
            0% {transform: scale(0.95, 1.05);}
            50% {transform: scale(1.05, 0.95);}
            100% {transform: scale(0.95, 1.05);}
          }
        `}
      </style>
      <div className="poop-top"></div>
      <div className="poop-middle"></div>
      <div className="poop-base"></div>
    </div>
  );
}

Poop.propTypes = {
  poopId: PropTypes.string.isRequired,
  poopStatus: PropTypes.string.isRequired,
  onScoopPoop: PropTypes.func.isRequired
};

export default Poop;
