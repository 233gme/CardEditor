import React from 'react';
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { Link, Route } from 'react-router-dom';
import Badge from './Badge';
import { useSelector, useDispatch } from 'react-redux';
import { onDelete, onAdd } from '../../Store/Actions/card';
import { logOut } from '../../Store/Reducers/user';
import { useHistory } from "react-router-dom";
import './style.css';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cards, user } = useSelector(state => (state));
  const onDeleteCard = () => { dispatch(onDelete(cards.cards)) };
  const onAddCard = () => { dispatch(onAdd(cards.cards)) };
  const onSingOut = () => {
    dispatch(logOut());
    history.push("/");
  };

  return (
    <header>
      <h1>{user.user.username ? user.isAdmin ? 'Hackerman is here!' : `Singed in as ${user.user.username}` : 'Header'}</h1>
      <Route path='/' exact><Badge /></Route>
      <div className="nav__block">
        <div className='nav__block__links'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            {user.user.username ? <li className='nav_link' onClick={onSingOut}>Sing out</li> : <li><Link to='/sing-in'>Sing in</Link></li>}
            {user.isAdmin ? <li><Link to='/settings'>Settings</Link></li> : null}
          </ul>
        </div>
        <Route path='/' exact>
          <div className='nav__block__buttons'>
            <div>
              <button className='buttons' onClick={onDeleteCard}><AiOutlineDelete /> Delete Card</button>
            </div>
            <div>
              <button className='buttons' onClick={onAddCard}><AiOutlinePlus /> Add Card</button>
            </div>
          </div>
        </Route>
      </div>
    </header>
  )
}

export default Header