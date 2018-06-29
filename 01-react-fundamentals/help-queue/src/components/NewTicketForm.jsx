import React from 'react';

function NewTicketForm() {
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
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
