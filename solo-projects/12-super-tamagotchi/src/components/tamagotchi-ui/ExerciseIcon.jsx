import React from 'react';

function ExerciseIcon() {
  return (
    <div className="flex">
      <style jsx>
        {`
          .flex {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .handle {
            height: 4px;
            width: 12px;
            background-color: #888;
          }

          .big-weight {
            height: 26px;
            width: 4px;
            border-radius: 2px;
            background-color: #888;
          }

          .small-weight {
            height: 14px;
            width: 4px;
            border-radius: 2px;
            background-color: #888;
          }

          .end-weight {
            height: 4px;
            width: 4px;
            background-color: #888;
          }

          .left {
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
          }

          .right {
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
          }
        `}
      </style>
      <div className="end-weight left"></div>
      <div className="small-weight"></div>
      <div className="big-weight"></div>
      <div className="handle"></div>
      <div className="big-weight"></div>
      <div className="small-weight"></div>
      <div className="end-weight right"></div>
    </div>
  );
}

export default ExerciseIcon;
