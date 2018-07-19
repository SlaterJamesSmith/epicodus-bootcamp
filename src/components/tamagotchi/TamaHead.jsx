import React from 'react';

function TamaHead() {
  return (
    <div className="tama-head animate-idle">
      <style jsx>
        {`
          .tama-head {
            height: 100px;
            width: 100px;
            position: absolute;
            bottom: 0;
            border-radius: 100%;
            background-color: #f09;
            transition: transform 1s;
          }

          @keyframes volume-displace {
            0% {
              height: 90px;
              width: 110px;
            }
            10% {
              height: 95px;
              width: 105px;
            }
            50% {
              height: 100px;
              width: 100px;
            }
            90% {
              height: 95px;
              width: 105px;
            }
            100% {
              height: 90px;
              width: 110px;
            }
          }

          .animate-idle {
            animation: volume-displace 0.8s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default TamaHead;
