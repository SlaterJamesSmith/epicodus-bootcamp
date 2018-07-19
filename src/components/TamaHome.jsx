import React from 'react';
import TamaRoom from './TamaRoom';

function TamaHome() {
  return (
    <section id="tama-home">
      <style jsx>
        {`
          #tama-home {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .chimney {
            height: 100px;
            width: 50px;
            position: absolute;
            top: 0;
            right: 10%;
            border-radius: 5px;
            background-color: #fce;
          }

          .roof {
            border-left: 250px solid transparent;
            border-right: 250px solid transparent;
            border-bottom: 100px solid #f09;
            z-index: 5;
          }

          .walls {
            width: 100%;
            height: 500px;
            padding: 15px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            background-color: #fce;
          }
        `}
      </style>
      <div className="chimney"></div>
      <div className="roof"></div>
      <div className="walls">
        <TamaRoom/>
      </div>
    </section>
  );
}

export default TamaHome;
