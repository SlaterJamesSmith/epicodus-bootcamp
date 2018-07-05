import React from 'react';
import Tamagotchi from './Tamagotchi';

function TamaRoom() {
  return (
    <section>
      <style jsx>
        {`
          section {
            height: 100%;
          }
        `}
      </style>
      <Tamagotchi/>
    </section>
  );
}

export default TamaRoom;
