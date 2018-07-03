import React from 'react';

function ActionBar() {
  return (
    <section>
      <style jsx>
        {`
          section {
            display: flex;
            justify-content: center;
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
