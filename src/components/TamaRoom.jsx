import React from 'react';
import TamaPet from './TamaPet';

function TamaRoom() {
  return (
    <section className="tama-room-ext">
      <style jsx>
        {`
          .tama-room-ext {
            border: 4px dashed #aaa;
            border-radius: 5px;
          }

          .tama-room-int {
            height: 462px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            background-color: #fff;
          }
        `}
      </style>
      <div className="tama-room-int">
        <TamaPet/>
      </div>
    </section>
  );
}

export default TamaRoom;
