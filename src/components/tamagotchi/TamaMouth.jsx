import React from 'react';
import PropTypes from 'prop-types';

function TamaMouth(props) {
  return (
    <div className="tama-mouth animate-idle">
      <style jsx>
        {`
          .tama-mouth {
            height: 10px;
            width: 20px;
            position: absolute;
            bottom: 20px;
            display: flex;
            justify-content: center;
            border-radius: 4px;
            background-color: #704;
          }

          .tooth {
            height: 4px;
            width: 6px;
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
            background-color: #fff;
          }

          @keyframes pucker {
            0% {width: 12px;}
            10% {width: 16px;}
            15% {width: 20px;}
            85% {width: 20px;}
            90% {width: 16px;}
            100% {width: 12px;}
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

          .animate-idle {
            animation:
              pucker 1s linear infinite,
              inertial-bounce 1s linear infinite;
          }
        `}
      </style>
      <div className="tooth"></div>
    </div>
  );
}

TamaMouth.propTypes = {
  petStatus: PropTypes.object.isRequired
};

export default TamaMouth;
