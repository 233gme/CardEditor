import React from 'react';
import {Header, CardList, PageNotFound, SingIn, FullCard} from '../Components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
      <BrowserRouter>
      <div className="App">
          <Header />
            <Switch>
              <Route exact path='/' component={CardList} />
              <Route path='/sing-in' component={SingIn} />
              <Route exact path='/card/:id' component={FullCard} />
              <Route component={PageNotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    )
}

export default App;