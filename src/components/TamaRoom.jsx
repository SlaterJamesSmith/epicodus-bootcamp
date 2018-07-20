import React from 'react';
import Tamagotchi from './tamagotchi/Tamagotchi';
import PropTypes from 'prop-types';

function TamaRoom(props) {
  return (
    <section className="tama-room-ext">
      <style jsx>
        {`
          .tama-room-ext {
            border: 4px dashed #f09;
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
        <Tamagotchi petStatus={props.petStatus} />
      </div>
    </section>
  );
}

TamaRoom.propTypes = {
  petStatus: PropTypes.object.isRequired
};

export default TamaRoom;
