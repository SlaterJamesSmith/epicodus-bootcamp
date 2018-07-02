import React from 'react';

function SignIn() {
  return (
    <div>
      <style jsx>
        {`
          div {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 50px 0;
          }

          form {
            height: 500px;
            width: 500px;
            padding: 50px;
            border: 1px solid #ddd;
          }

          h2 {
            font-weight: normal;
            line-height: 1.5rem;
          }

          h2 .subtitle {
            font-size: 1rem;
            font-weight: 500;
          }

          label {
            display: block;
            color: #4285f4;
            font-size: 0.8rem;
          }

          input {
            width: 100%;
            display: block;
            margin-bottom: 25px;
            padding: 10px;
            border: none;
            border-bottom: 2px solid #4285f4;
            outline: none;
            font-size: 1rem;
          }

          button {
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            background-color: #4285f4;
            color: #fff;
            text-transform: uppercase;
          }
        `}
      </style>
      <form>
        <h2>Sign in<br/>
          <span className='subtitle'>to continue to YouTube</span></h2>
        <label>Email</label>
        <input type='text'/>
        <label>Password</label>
        <input type='text'/>
        <button type='submit'>Next</button>
      </form>
    </div>
  );
}

export default SignIn;
