import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const Badge = () => {
  const { cards } = useSelector(state => (state));
  const count = (value) => (value.length)

  return (
    <div className='badge'>Counter: <span>{count(cards)}</span></div>
  )
}

export default Badge;