import React from 'react';
import Header from '../Components/Header';
import CardList from '../Components/CardList';
import CardProvider from '../Context/card-context';
import './App.css';

const App = () => {
    return (
      <CardProvider>
      <div className="App">
          <Header />
          <CardList />
      </div>
      </CardProvider>
    )
}

export default App;