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
            height: 22px;
            width: 22px;
            border-radius: 100%;
            background-color: #000;
          }

          .eye-light {
            height: 10px;
            width: 10px;
            position: absolute;
            top: 2px;
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
