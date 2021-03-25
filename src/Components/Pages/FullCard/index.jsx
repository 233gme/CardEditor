import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../CardList/Card';

const FullCard = props => {
  const { cards } = useSelector(state => (state));
  const [fullcard, setFullState] = useState({});

  useEffect(() => {
    let card = cards.find(item => (item.id === props.match.params.id))
    if (card) setFullState(card)
    else props.history.push('/404')
  }, [cards, props.match.params.id, props.history])

  return (
    <div className='fullcard_block'>
      <Card card={fullcard} />
    </div>
  )
}

export default FullCard;
