import React, { useEffect } from 'react';
import { Header, CardList, NotFound, SingIn, FullCard, Settings } from '../Components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../Store/Reducers/user';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData())
  });
  const { user } = useSelector(state => (state));

    return (
      <BrowserRouter>
      <div className="App">
          <Header />
            <Switch>
            <Route exact path='/' component={CardList} />
            <Route exact path='/sing-in' component={SingIn} />
            <Route exact path='/card/:id' component={FullCard} />
            {user.isAdmin && <Route exact path='/settings' component={Settings} />}
            <Route path='/404' component={NotFound} />
            <Redirect to="/404" />
            </Switch>
        </div>
      </BrowserRouter>
    )
}

export default App;