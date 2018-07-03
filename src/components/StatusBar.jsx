import React from 'react';

function StatusBar() {
  return (
    <section>
      <style jsx>
        {`
          section {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 20px;
            padding: 0 20px 20px;
          }

          div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .meter {
            height: 10px;
            width: 100%;
            background-color: green;
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
