import React from 'react';

function ActionBar() {
  return (
    <section>
      <style jsx>
        {`
          section {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 10px 0 20px;
            border-top: 1px solid #ccc;
          }

          button {
            border: none;
            box-shadow: 0 5px 2px 0 #3339;
            border-radius: 10px;
            padding: 5px 20px;
            text-transform: uppercase;
            font-size: 2rem;
            color: white;
            margin: 10px;
            background-color: steelblue;
            outline: none;
          }
          `}
      </style>
      <button>Feed</button>
      <button>Sleep</button>
      <button>Play</button>
      <button>Clean</button>
    </section>
  );
}

export default ActionBar;
