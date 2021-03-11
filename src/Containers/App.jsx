import React from 'react';
import Header from '../Components/Header';
import CardList from '../Components/CardList';
import CardProvider from '../Context/card-context';
import PageNotFound from '../Components/Pages/404';
import SingIn from '../Components/Pages/SingIn';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => {
    return (
      <BrowserRouter>
      <CardProvider>
      <div className="App">
          <Header />
            <Switch>
              <Route exact path='/' component={CardList} />
              <Route path='/sing-in' component={SingIn} />
              <Route component={PageNotFound} />
            </Switch>
      </div>
      </CardProvider>
      </BrowserRouter>
    )
}

export default App;