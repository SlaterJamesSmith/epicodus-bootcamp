import React from 'react';

function TamaHead() {
  return (
    <div className="tama-head">
      <style jsx>
        {`
          .tama-head {
            height: 100px;
            width: 100px;
            position: absolute;
            bottom: 0;
            border-radius: 100%;
            background-color: #f09;
            transition: transform 1s;
          }
        `}
      </style>
    </div>
  );
}

export default TamaHead;
