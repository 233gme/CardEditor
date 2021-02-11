import React from 'react';
import './style.css';

const CardBody = (props) => {
  const defaultMode = (
    <p className='card_text'>{props.card.text}</p>
  )

  const editMode = (
    <textarea
      className='card_textarea'
      name='text'
      onChange={props.addNewText}
      defaultValue={props.card.text}>
    </textarea>
  )

  return props.card.editModeFlag ? editMode : defaultMode;
};

export default CardBody;