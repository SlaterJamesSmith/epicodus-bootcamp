import React from 'react';

function FoodIcon() {
  return (
    <div className="flex">
      <style jsx>
        {`
          .flex {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .spoon {
            flex-direction: column;
            margin-right: 1px;
          }

          .fork {
            flex-direction: column;
            margin-left: 1px;
          }

          .spoon-head {
            height: 16px;
            width: 12px;
            border-radius: 10px;
            background-color: #888;
          }

          .fork-head {
            display: flex;
            align-items: flex-end;
          }

          .fork-prong {
            height: 16px;
            width: 2px;
            background-color: #888;
          }

          .fork-gap {
            height: 6px;
            width: 2px;
            background-color: #888;
          }

          .utensil-stem {
            height: 16px;
            width: 4px;
            background-color: #888;
          }
        `}
      </style>
      <div className="spoon flex">
        <div className="spoon-head"></div>
        <div className="utensil-stem"></div>
      </div>
      <div className="fork flex">
        <div className="fork-head">
          <div className="fork-prong"></div>
          <div className="fork-gap"></div>
          <div className="fork-prong"></div>
          <div className="fork-gap"></div>
          <div className="fork-prong"></div>
        </div>
        <div className="utensil-stem"></div>
      </div>
    </div>
  );
}

export default FoodIcon;
