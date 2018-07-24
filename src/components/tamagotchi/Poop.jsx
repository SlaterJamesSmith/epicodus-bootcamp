import React from 'react';

function Poop() {
  return (
    <div className="poop">
      <style jsx>
        {`
          .poop {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .poop-base, .poop-middle, .poop-top {
            border-radius: 20px;
            background-color: brown;
            box-shadow: 0 0 4px 2px #0002;
          }

          .poop-base {
            height: 20px;
            width: 50px;
            animation: growth-large 1s infinite;
          }

          .poop-middle {
            height: 14px;
            width: 30px;
            margin-bottom: -2px;
            animation: materialize 1s, growth-medium 1s;
          }

          .poop-top {
            height: 14px;
            width: 14px;
            margin-bottom: -2px;
            animation: materialize 1s, growth-small 1s;
          }
        `}
      </style>
      <div className="poop-top"></div>
      <div className="poop-middle"></div>
      <div className="poop-base"></div>
    </div>
  );
}

export default Poop;
