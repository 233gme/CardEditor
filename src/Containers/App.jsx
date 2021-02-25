import React from 'react';
import Header from '../Components/Header';
import CardList from '../Components/CardList';
import CardProvider from '../Context/card-context';
import './App.css';

const App = () => {

    return (
      <div className="App">
        <CardProvider>

          <Header />
          <CardList />

        </CardProvider>
      </div>
    )
}

export default App 