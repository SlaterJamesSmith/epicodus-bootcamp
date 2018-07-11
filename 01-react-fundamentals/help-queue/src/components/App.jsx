import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';
import Error404 from './Error404';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(), 60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId];
      const newFormattedWaitTime = ticket.timeOpen.fromNow(true);
      const action = {
        type: 'UPDATE_TIME',
        id: ticketId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
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
            render={() => <TicketList ticketList={this.props.masterTicketList} />}
          />
          <Route path='/newticket' component={NewTicketControl} />
          <Route
            path='/admin'
            render={(props) => <Admin
              currentRouterPath={props.location.pathname}
            />}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

export default withRouter(connect(mapStateToProps)(App));
