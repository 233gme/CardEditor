import React from 'react';
import styled from 'styled-components';
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { Link, Route } from 'react-router-dom';
import Badge from './Badge';
import { useSelector, useDispatch } from 'react-redux';
import { onView, onDelete, onAdd } from '../../Store/Actions/actions';
import './style.css';

const Checkbox = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  background: #fff;
  border: 2px solid #000;
  border-radius: 50%;
  outline: none;
  &:hover{
    background: #fdb8b6;
  }
  &:active {
    background: #f06966;
  }
  &:checked {
    background: #f06966;
  }
  `;

const Header = () => {
  const dispatch = useDispatch();
  const { cards, view } = useSelector(state => (state));
  const onViewHandler = () => { dispatch(onView(cards, !view)) };
  const onDeleteCard = () => { dispatch(onDelete(cards)) };
  const onAddCard = () => { dispatch(onAdd(cards)) };

  return (
    <header>
      <h1>Header</h1>
      <Route path='/' exact><Badge /></Route>
      <div className="nav__block">
        <div className='nav__block__links'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/sing-in'>Sing in</Link></li>
          </ul>
        </div>
        <Route path='/' exact>
          <div className='nav__block__buttons'>
        <div>
          <span className='buttons'>
          <Checkbox onClick={onViewHandler} type="checkbox" id='check1' />
          <label htmlFor='check1'>View Mode</label>
          </span>
        </div>
        <div>
          <button className='buttons' onClick={onAddCard}><AiOutlinePlus /> Add Card</button>
        </div>
        <div>
          <button className='buttons' onClick={onDeleteCard}><AiOutlineDelete /> Delete Card</button>
        </div></div>
        </Route>
      </div>
    </header>
  )
}

export default Header