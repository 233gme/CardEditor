import React from 'react';
import Header from '../Components/Header';
import CardList from '../Components/CardList';
import CardProvider from '../Context/card-context';
import PageNotFound from '../Components/Pages/404';
import SingIn from '../Components/Pages/SingIn';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => {
    return (
      <Router>
      <CardProvider>
      <div className="App">
          <Header />
            <Switch>
              <Route exact path='/' component={CardList} />
              <Route path='/sing_in' component={SingIn} />
              <Route component={PageNotFound} />
            </Switch>
      </div>
      </CardProvider>
      </Router>
    )
}

export default App;