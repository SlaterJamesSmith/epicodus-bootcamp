import React from 'react';

function SongSearch() {
  let input;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      input.value = null;
    }}>
      <style jsx>
        {`
          form {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 20px;
          }

          input, button {
            margin-right: 20px;
            padding: 5px 10px;
            border: 1px solid #ff5a00;
            border-radius: 4px;
          }

          button {
            color: #fff;
            background-color: #ff5a00;
            font-weight: bold;
          }
        `}
      </style>
      <input placeholder="Song Title" ref={node => { input = node; }}></input>
      <button>Search</button>
    </form>
  );
}

export default SongSearch;
