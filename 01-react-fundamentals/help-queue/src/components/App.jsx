import React from 'react';
import { v4 } from 'uuid';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  handleAddingNewTicketToList(newTicket) {
    let newTicketId = v4();
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList, {[newTicketId]: newTicket});
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(), 60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = newMasterTicketList[ticketId].timeOpen.fromNow(true);
    });
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticketId) {
    this.setState({selectedTicket: ticketId});
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

            h2 {
              margin: 0;
              padding: 20px;
            }

            .ticket {
              padding: 10px 20px;
            }
          `}
        </style>
        <Header/>
        <Switch>
          <Route
            exact path='/'
            render={() => <TicketList ticketList={this.state.masterTicketList} />}
          />
          <Route
            path='/newticket'
            render={() => <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />}
          />
          <Route
            path='/admin'
            render={(props) => <Admin
              ticketList={this.state.masterTicketList}
              currentRouterPath={props.location.pathname}
              onTicketSelection={this.handleChangingSelectedTicket}
              selectedTicket={this.state.selectedTicket}
            />}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
