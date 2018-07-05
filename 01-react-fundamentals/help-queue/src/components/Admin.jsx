import React from 'react';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import PropTypes from 'prop-types';

function Admin(props) {
  let optionalSelectedTicketContent = null;
  if (props.selectedTicket != null) {
    optionalSelectedTicketContent = <TicketDetail selectedTicket={props.selectedTicket}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
      <hr/>
      {optionalSelectedTicketContent}
      <hr/>
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}
        onTicketSelection={props.onTicketSelection}
      />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array.isRequired,
  currentRouterPath: PropTypes.string.isRequired,
  onTicketSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.object
};

export default Admin;
