import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props) {
  return (
    <div className="ticket">
      <h3>Selected Ticket</h3>
      <p><strong>Submitted:</strong> {props.selectedTicket.formattedWaitTime} ago</p>
      <p><strong>Students:</strong> {props.selectedTicket.names}</p>
      <p><strong>Location:</strong> {props.selectedTicket.location}</p>
      <p><strong>Issue:</strong> <em>{props.selectedTicket.issue}</em></p>
    </div>
  );
}

TicketDetail.propTypes = {
  selectedTicket: PropTypes.object
};

export default TicketDetail;
