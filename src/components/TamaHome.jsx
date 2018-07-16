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
            background-color: #fdf;
          }

          .roof {
            border-left: 250px solid transparent;
            border-right: 250px solid transparent;
            border-bottom: 100px solid #fdf;
          }

          .walls {
            width: 100%;
            height: 500px;
            padding: 15px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            background-color: #fdf;
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
