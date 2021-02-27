import React, { useContext } from 'react';
import Card from '../Card';
import { CardContext } from '../../Context/card-context';

const CardList = () => {
  const { cards, view, onSave } = useContext(CardContext);

  return (
    <div className='main'>
      {cards.map(card => {
        return (
          <Card
            key={card.id}
            card={card}
            onView={view}
            onSaveChanges={onSave} />
        )
      })}
    </div>
  )
}

export default CardList