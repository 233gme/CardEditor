import React from 'react';
import PropTypes from 'prop-types';

const CardBody = (props) => {

  const defaultMode = (
    <p className='card_text'>{props.card.text}</p>
  );

  const editMode = (
    <textarea className='card_textarea' name='text'
      onChange={props.addNewText}
      defaultValue={props.card.text}>
    </textarea>
  );

  return props.card.editModeFlag ? editMode : defaultMode;
}

CardBody.propTypes = {
  text: PropTypes.string,
  addNewText: PropTypes.func,
}

export default CardBody