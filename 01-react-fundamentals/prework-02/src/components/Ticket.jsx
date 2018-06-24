import React from 'react';

function Ticket() {
  return (
    <div>
      <h2>{new Date().toLocaleTimeString()}</h2>
      <h3>1A</h3>
      <h3>Mike</h3>
      <p><em>Firebase will not save a record!</em></p>
      <hr/>
    </div>
  );
}

export default Ticket;
