import React from 'react';
import Ticket from './Ticket';

function TicketList() {
  return (
    <Ticket
      location='1A'
      names='Mike'
      issue='Firebase not saving records.'
      />
  );
}

export default TicketList;
