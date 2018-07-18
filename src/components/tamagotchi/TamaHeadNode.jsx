import React from 'react';
import TamaHead from './TamaHead';
import TamaFaceNode from './TamaFaceNode';

function TamaHeadNode() {
  return (
    <div className="tama-head-node">
      <style jsx>
        {`
          .tama-head-node {
            height: 0;
            width: 0;
            position: relative;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
      <TamaHead/>
      <TamaFaceNode/>
    </div>
  );
}

export default TamaHeadNode;
