import React, {useEffect} from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../../Store/Actions/cards';

const CardList = () => {
  const { cards } = useSelector(state => (state));
  const dispatch = useDispatch();
  useEffect(() => {
    if (!cards.length) dispatch(fetchCards());
  })

  return (
    <div className='main'>
      {cards && cards.map(card => {
        return (
          <Card
          key={card.id}
          card={card}
          />
        )})}
    </div>
  )
}

export default CardList;