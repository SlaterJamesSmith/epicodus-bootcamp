import React from 'react';
import Meter from './Meter';
import PropTypes from 'prop-types';

function StatusBar(props) {
  return (
    <section>
      <style jsx>
        {`
          section {
            width: 100%;
            border-bottom: 1px solid #ccc;
          }

          .status-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 20px;
            padding: 0 20px 20px;
          }

          h2 {
            text-align: center;
          }
          `}
      </style>
      <div className="status-container">
        <div>
          <h2>Hunger</h2>
          <Meter level={props.hungerLevel}/>
        </div>
        <div>
          <h2>Energy</h2>
          <Meter level={props.energyLevel}/>
        </div>
        <div>
          <h2>Happiness</h2>
          <Meter level={props.happinessLevel}/>
        </div>
        <div>
          <h2>Hygiene</h2>
          <Meter level={props.hygieneLevel}/>
        </div>
      </div>
    </section>
  );
}

StatusBar.propTypes = {
  hungerLevel: PropTypes.number.isRequired,
  energyLevel: PropTypes.number.isRequired,
  happinessLevel: PropTypes.number.isRequired,
  hygieneLevel: PropTypes.number.isRequired
};

export default StatusBar;
