import React, { useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import CardList from '../Components/CardList';
import PageNotFound from '../Components/Pages/404';
import SingIn from '../Components/Pages/SingIn';
import FullCard from '../Components/Pages/FullCard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { getCards } from '../Store/Actions/index';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
      .then(({ data }) => {
        dispatch(getCards(data.slice(0, 15).map(card => ({
          id: card.Number,
          title: card.Name,
          text: card.About,
          editModeFlag: false,
          chooseСardFlag: false
        }
        ))))
      })
      .catch(error => console.log(error))
  });

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