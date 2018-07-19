import React from 'react';

function TamaMouth() {
  return (
    <div className="tama-mouth animate-idle">
      <style jsx>
        {`
          .tama-mouth {
            height: 10px;
            width: 20px;
            position: absolute;
            bottom: 20px;
            border-radius: 4px;
            background-color: #fff;
          }

          @keyframes pucker {
            0% {width: 20px;}
            2% {width: 20px;}
            45% {width: 12px;}
            50% {width: 10px;}
            55% {width: 12px;}
            98% {width: 20px;}
            100% {width: 20px;}
          }

          .animate-idle {
            animation: pucker 0.8s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default TamaMouth;
