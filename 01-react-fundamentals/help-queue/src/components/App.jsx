import React from 'react';
import Error404 from './Error404';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket){
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
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
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList}/>}/>
          <Route path='/newticket' render={() => <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList}/>}/>
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
