import React from 'react';
import {Header, CardList, PageNotFound, SingIn, FullCard} from '../Components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
      <BrowserRouter>
      <div className="App">
          <Header />
            <Switch>
            <Route exact path='/' component={CardList} />
            <Route exact path='/sing-in' component={SingIn} />
            <Route exact path='/card/:id' component={FullCard} />
            <Route path='/404' component={PageNotFound} />
            <Redirect to="/404" />
            </Switch>
        </div>
      </BrowserRouter>
    )
}

export default App;