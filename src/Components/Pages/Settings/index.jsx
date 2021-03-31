import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { onView } from '../../../Store/Actions/card';

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

const Settings = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector(state => (state));
  const onViewHandler = () => { dispatch(onView(cards.cards, !cards.view)) };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <span className='buttons'>
        <Checkbox onClick={onViewHandler} type="checkbox" id='check1' />
        <label htmlFor='check1'>View Mode is {cards.view ? 'ON' : 'OFF'}</label>
      </span>
    </div>
  )
}

export default Settings;
