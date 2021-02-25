import React, { useContext } from 'react';
import { CardContext } from '../../../Context/card-context';
import './style.css';

const Badge = () => {
  const { counter } = useContext(CardContext);

  return <div className='badges'>Counter<span className='badges__counter'>{counter()}</span></div>
}

export default Badge;