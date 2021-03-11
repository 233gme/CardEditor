import React, { useContext } from 'react';
import styled from 'styled-components';
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { CardContext } from '../../Context/card-context';
import { NavLink, Route } from 'react-router-dom';
import Badge from './Badge';
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
  const { onView, onAdd, onDelete } = useContext(CardContext)

  return (
    <header>
      <h1>Header</h1>
      <Route path='/' exact><Badge /></Route>
      <div className="nav__block">
        <div className='nav__block__links'>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/sing-in'>Sing in</NavLink></li>
          </ul>
        </div>
        <Route path='/' exact>
          <div className='nav__block__buttons'>
        <div>
              <span className='buttons'>
            <Checkbox onClick={onView} type="checkbox" id='check1' />
            <label htmlFor='check1'>View Mode</label>
          </span>
        </div>
        <div>
              <button className='buttons' onClick={onAdd}><AiOutlinePlus /> Add Card</button>
        </div>
        <div>
              <button className='buttons' onClick={onDelete}><AiOutlineDelete /> Delete Card</button>
          </div>
          </div>
        </Route>
      </div>
    </header>
  )
}

export default Header