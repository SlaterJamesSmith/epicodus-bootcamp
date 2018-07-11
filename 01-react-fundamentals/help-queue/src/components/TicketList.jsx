import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
  return (
    <div>
      {Object.keys(props.ticketList).map(ticketId => {
        let ticket = props.ticketList[ticketId];
        return (
          <Ticket
            ticketId={ticketId}
            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            formattedWaitTime={ticket.formattedWaitTime}
            currentRouterPath={props.currentRouterPath}
            key={ticketId}
          />
        );
      })}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object.isRequired,
  currentRouterPath: PropTypes.string
};

export default TicketList;
