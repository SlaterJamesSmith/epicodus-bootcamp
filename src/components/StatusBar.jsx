import React from 'react';

function StatusBar() {
  return (
    <section>
      <style jsx>
        {`
          section {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            border-bottom: 1px solid #ccc;
          }

          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 20px 10px;
          }

          .meter {
            height: 10px;
            width: 100%;
            background-color: #46da46;
          }
          `}
      </style>
      <div>
        <h2>Hunger</h2>
        <div className='meter'></div>
      </div>
      <div>
        <h2>Energy</h2>
        <div className='meter'></div>
      </div>
      <div>
        <h2>Happiness</h2>
        <div className='meter'></div>
      </div>
      <div>
        <h2>Hygiene</h2>
        <div className='meter'></div>
      </div>
    </section>
  );
}

export default StatusBar;
