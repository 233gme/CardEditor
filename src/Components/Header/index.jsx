import React from 'react';
import './style.css';
import styled from 'styled-components';
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

const Checkbox = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  background: #fff;
  border: 3px solid #fff;
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

function Header(props) {
  return (
    <header>
      <h1>Header</h1>
      <div className="nav__block">
        <div>
          <span className='buttons buttons__view-mode'>
          <Checkbox onClick={props.onViewHandler} type="checkbox" id='check1' />
            <label htmlFor='check1'>View Mode</label>
          </span>
        </div>
        <div>
          <button className='buttons buttons__add-card' onClick={props.onCreateHandler}><AiOutlinePlus /> Add Card</button>
        </div>
        <div>
          <button className='buttons buttons__delete-card' onClick={props.onDeleteHandler}><AiOutlineDelete /> Delete Card</button>
        </div>
      </div>
    </header>
  )
}

export default Header