import React from 'react';

function NewTicketForm() {
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    _names.value = null;
    _location.value = null;
    _issue.value = null;
  }

  return (
    <div>
      <style jsx>
        {`
          form {
            margin: 20px 0;
          }

          input, textarea, button {
            display: block;
            margin: 10px;
          }

          textarea {
            min-height: 100px;
            width: 300px;
          }
        `}
      </style>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
