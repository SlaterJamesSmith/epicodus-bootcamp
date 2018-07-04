import React from 'react';
import TicketList from './TicketList';
import PropTypes from 'prop-types';

function Admin(props) {
  return (
    <div>
      <h2>Admin</h2>
      <hr/>
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}
      />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array.isRequired,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
