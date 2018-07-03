import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  return (
    <div>
      <div className="ticket">
        <h2>{props.location} - {props.names}</h2>
        <h3>{props.formattedWaitTime} ago</h3>
        <p><em>{props.issue}</em></p>
      </div>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired
};

export default Ticket;
