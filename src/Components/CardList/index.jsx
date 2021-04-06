import React, {useEffect} from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../../Store/Actions/cards';
import { onSave } from '../../Store/Actions/card';

const CardList = props => {
  const { cards, view } = useSelector(state => (state.cards));
  const dispatch = useDispatch();
  const onSaveChanges = id => { dispatch(onSave(cards, id)) };
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
            view={view}
            onSaveChanges={(val) => onSaveChanges(val)} />
        )})}
    </div>
  )
}

export default CardList;