import React from 'react';
import './style.css';
import styled from 'styled-components';
import { AiOutlineDelete, AiOutlinePlusSquare } from "react-icons/ai";

const Checkbox = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;
  &:hover{
    border: 1px solid #f06966;
    background: #fdb8b6;
  }
  &:active {
    background: #f06966;
  }
  &:checked {
    background: #f06966;
    border: 1px solid #f06966;
  }
  `;

function Header(props) {
  return (
    <header>
      <h1>Header</h1>
      <div className="checkbox__block">
        <div>
          <Checkbox onClick={props.onViewHandler} type="checkbox" id='check1' />
          <label htmlFor='check1'>View Only Mode</label>
        </div>
        <div>
          <button onClick={props.onCreateHandler}><AiOutlinePlusSquare /></button>
          <span>Create Card</span>
        </div>
        <div>
          <button onClick={props.onDeleteHandler}><AiOutlineDelete /></button>
          <span>Delete Card</span>
        </div>
      </div>
    </header>
  )
}

export default Header