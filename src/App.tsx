import React from 'react';
import './App.css';

import qrCode from './image-qr-code.png';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <img src={qrCode} alt='qr-code' />
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
