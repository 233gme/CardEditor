import React from 'react';
import Header from './Header';
import Cart from './Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main' style={{ border: '3px solid #000', width: '100vw', height: '80vh' }}>
        <Cart>
          Jingle bells, jingle bells
          Jingle all the way
          Oh, what fun it is to ride
          In a one horse open sleigh
        </Cart>
      </div>
    </div>
  );
}

export default App
