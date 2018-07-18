import React from 'react';
import TamaHeadJoint from './TamaHeadJoint';

function Tamagotchi() {
  return (
    <section className="tamagotchi">
      <style jsx>
        {`
          .tamagotchi {
            height: 0;
            width: 0;
            box-shadow: 0 0 0 50px #aaa;
          }
        `}
      </style>
      <TamaHeadJoint/>
    </section>
  );
}

export default Tamagotchi;
