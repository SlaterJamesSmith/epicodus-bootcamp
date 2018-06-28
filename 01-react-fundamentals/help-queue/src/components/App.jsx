import React from 'react';
import Error404 from './Error404';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <style jsx global>
        {`
          body {
            font-family: sans-serif;
          }

          h1 {
            padding: 10px 20px;
          }

          .ticket {
            padding: 10px 20px;
          }
        `}
      </style>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList}/>
        <Route path='/newticket' component={NewTicketForm}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
