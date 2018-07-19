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
            0% {width: 10px;}
            20% {width: 18px;}
            50% {width: 20px;}
            80% {width: 18px;}
            100% {width: 10px;}
          }

          .animate-idle {
            animation: pucker 1s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default TamaMouth;
