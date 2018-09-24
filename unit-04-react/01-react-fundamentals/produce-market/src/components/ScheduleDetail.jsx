import React from 'react';
import PropTypes from 'prop-types';

function ScheduleDetail(props) {
  return (
    <article>
      <h4>{props.day}</h4>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </article>
  );
}

ScheduleDetail.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default ScheduleDetail;
