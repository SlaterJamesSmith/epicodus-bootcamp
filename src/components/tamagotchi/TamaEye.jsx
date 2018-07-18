import React from 'react';

function TamaEye() {
  return (
    <div className="tama-eye">
      <style jsx>
        {`
          .tama-eye {
            min-height: 30px;
            min-width: 30px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #fff;
            border-radius: 100%;
            background-color: #fff;
          }

          .pupil {
            height: 24px;
            width: 24px;
            border-radius: 100%;
            background-color: #000;
          }

          .eye-light {
            height: 12px;
            width: 12px;
            position: absolute;
            top: 0;
            border-radius: 100%;
            background-color: #fff;
          }
        `}
      </style>
      <div className="pupil"></div>
      <div className="eye-light"></div>
    </div>
  );
}

export default TamaEye;
