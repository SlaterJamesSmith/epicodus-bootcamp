import React from 'react';
import PropTypes from 'prop-types';

function TamaMouth(props) {
  return (
    <div className={'mouth ' + props.mood}>
      <style jsx>
        {`
          .mouth {
            height: 0px;
            width: 50px;
            position: absolute;
            top: 120px;
            left: 55px;
            border-top: 5px solid transparent;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid #000;
            border-radius: 100%;
          }

          .happy {
            height: 50px;
            top: 70px;
          }

          .neutral {
            height: 0;
          }

          .sad {
            height: 50px;
            border-top: 5px solid #000;
            border-bottom: 5px solid transparent;
          }
        `}
      </style>
    </div>
  );
}

TamaMouth.propTypes = {
  mood: PropTypes.string.isRequired
};

export default TamaMouth;
