import React from 'react';

function PlayIcon() {
  return (
    <div className="flex rotate">
      <style jsx>
        {`
          .rotate {
            transform: rotate(-30deg);
          }

          .flex {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .bat {
            flex-direction: column;
            margin-left: 4px;
          }

          .bat-top {
            height: 24px;
            width: 8px;
            border-radius: 4px;
            background-color: #888;
          }

          .bat-handle {
            height: 8px;
            width: 4px;
            border-radius: 2px;
            background-color: #888;
          }

          .ball {
            height: 8px;
            width: 8px;
            margin-left: 6px;
            border-radius: 100%;
            background-color: #888;
          }
        `}
      </style>
      <div className="bat flex">
        <div className="bat-top"></div>
        <div className="bat-handle"></div>
      </div>
      <div className="ball"></div>
    </div>
  );
}

export default PlayIcon;
