import React from 'react';

function SearchBtn() {
  return (
    <button type="submit">
      <style jsx>
        {`
          button {
            height: 30px;
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            background-color: #ddd;
            border: 1px solid #ccc;
            border-left: none;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            cursor: pointer;
          }

          svg {
            height: 20px;
            width: 20px;
            fill: #999;
          }
        `}
      </style>
      <svg viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
      </svg>
    </button>
  );
}

export default SearchBtn;
