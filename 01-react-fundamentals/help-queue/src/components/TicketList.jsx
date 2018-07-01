import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

var masterTicketList = [
  {
    names: 'Mike',
    location: '1A',
    issue: 'Firebase won\'t save record.'
  },
  {
    names: 'Matt',
    location: '2B',
    issue: 'Webpack won\'t build my project.'
  },
  {
    names: 'William',
    location: '3C',
    issue: 'API call not responding.'
  }
];

function TicketList(props) {
  return (
    <div>
      <hr/>
        {props.ticketList.map((ticket, index) =>
          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index}
          />
        )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
