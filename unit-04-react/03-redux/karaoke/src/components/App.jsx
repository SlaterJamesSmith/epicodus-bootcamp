import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SongDisplay from './SongDisplay';

function App() {
  return(
    <div id="wrapper">
      <style jsx global>
        {`
          #wrapper {
            min-height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 140px 0 200px;
          }

          h1, h2 {
            text-transform: uppercase;
          }

          h1, h2, h3, h4, p {
            margin: 0;
          }
        `}
      </style>
      <Header/>
      <SongDisplay/>
      <Footer/>
    </div>
  );
}

export default App;
