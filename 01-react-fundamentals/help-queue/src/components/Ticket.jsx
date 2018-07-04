import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  const ticketInfo =
    <div>
      <div className="ticket">
        <h3>{props.location} - {props.names}</h3>
        <h4>{props.formattedWaitTime} ago</h4>
        <p><em>{props.issue}</em></p>
      </div>
      <hr/>
    </div>;

  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {alert('Clicked');}}>
        {ticketInfo}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInfo}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Ticket;
