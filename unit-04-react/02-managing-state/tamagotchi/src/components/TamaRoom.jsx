import React from 'react';
import Tamagotchi from './Tamagotchi';
import PropTypes from 'prop-types';

function TamaRoom(props) {
  return (
    <section>
      <style jsx>
        {`
          section {
            height: 100%;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            padding: 105px 0 75px;
          }
        `}
      </style>
      <Tamagotchi
        happinessLevel={props.happinessLevel}
      />
    </section>
  );
}

TamaRoom.propTypes = {
  happinessLevel: PropTypes.number.isRequired
};

export default TamaRoom;
