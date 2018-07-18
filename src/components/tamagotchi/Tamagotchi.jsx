import React from 'react';
import TamaHeadNode from './TamaHeadNode';

function Tamagotchi() {
  return (
    <section className="tamagotchi">
      <style jsx>
        {`
          .tamagotchi {
            height: 0;
            width: 0;
          }
        `}
      </style>
      <TamaHeadNode/>
    </section>
  );
}

export default Tamagotchi;
