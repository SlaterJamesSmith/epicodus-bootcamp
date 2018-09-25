import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootConfirm = this.handleTroubleshootConfirm.bind(this);
  }

  handleTroubleshootConfirm() {
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewTicketForm/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootConfirm={this.handleTroubleshootConfirm} />;
    }

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewTicketControl;
