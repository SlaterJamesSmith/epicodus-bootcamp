import React from 'react';
import FoodIcon from './FoodIcon';
import ExerciseIcon from './ExerciseIcon';
import PlayIcon from './PlayIcon';
import PropTypes from 'prop-types';

function MeterDecal(props) {
  const meterIcon = setIconType(props.meterType);

  function setIconType(meterType) {
    if (meterType === 'food') {
      return <FoodIcon/>;
    } else if (meterType === 'health') {
      return <ExerciseIcon/>;
    } else if (meterType === 'play') {
      return <PlayIcon/>;
    } else {
      return;
    }
  }

  return (
    <div className="meter-decal">
      <style jsx>
        {`
          .meter-decal {
            z-index: 10;
          }
        `}
      </style>
      {meterIcon}
    </div>
  );
}

MeterDecal.propTypes = {
  meterType: PropTypes.string
};

export default MeterDecal;
