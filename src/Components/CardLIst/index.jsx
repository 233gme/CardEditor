import React from 'react';
import Card from '../Card';

const CardList = (props) => {
  return (
  <div className='main'>
      {props.data.cards.map(card => {
        return (
        <Card
            key={card.id}
            card={card}
            onView={props.data.viewMode}
            onSaveChanges={props.saveNewChanges} />
        )
          })}
    </div>
  )
}

export default CardList