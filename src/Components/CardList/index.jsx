import React from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { onSave } from '../../Store/Actions';

const CardList = props => {
  const { cards, view } = useSelector(state => (state));
  const dispatch = useDispatch();
  const onSaveChanges = index => { dispatch(onSave(cards, index)) };

  return (
    <div className='main'>
      {cards && cards.map(card => {
        return (
          <Card
            key={card.id}
            card={card}
            onView={view}
            onSaveChanges={(val) => onSaveChanges(val)}
            route={props} />
        )
      })}
    </div>
  )
}

export default CardList;