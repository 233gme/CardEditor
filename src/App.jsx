import React, { Component } from 'react';
import Header from './Components/Header';
import CardList from './Components/CardLIst';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <CardList />
      </div>
    )
  }
  }

export default App 