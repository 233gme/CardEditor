import React, { useState } from 'react';
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import './style.css';

const Card = (props) => {
  // Сhooses a card
  let [chooseСardFlag, setChooseСardState] = useState(false);
  const selectItem = () => setChooseСardState(!chooseСardFlag);

  // Stage for type of button and adding input fields
  let [editModeFlag, setCardState] = useState(false);
  const changeText = () => {
    setChooseСardState(chooseСardFlag = false);
    setCardState(!editModeFlag);
  };

  // Intermediate storage facility for text
  const newTextData = { ...props.card };
  // Add text from input or textarea
  const addNewText = event => {
    newTextData[event.target.name] = event.target.value;
  }

  const saveNewText = () => {
    props.newTextChangeHandler(newTextData);
    // console.log(newText)
    setCardState(editModeFlag = false);
  };

  const defaultMode = (
    < div className={chooseСardFlag === false ? 'card card_is_green' : 'card card_is_red'}>
      <div className='card_title'>
        <p>{props.card.title}</p>
        <div>
          {props.onView ?
            null : <button
              title='режим редактирования'
              onClick={changeText}>
              <AiFillEdit />
            </button>}
          <input
            className='card_checbox'
            type="checkbox"
            onClick={selectItem}>
          </input>
        </div>
      </div>
      <p className='card_text'>{props.card.text}</p>
    </div >
  );

  const editMode = (
    <div className='card card_is_green'>
      <div className='card_title'>
        <input
          type={'text'}
          name='title'
          onChange={addNewText}
          defaultValue={props.card.title}>
        </input>
        <div>
          <button title='сохранить изменения' onClick={saveNewText}><AiOutlineCheck /></button>
          <button title='отменить изменения' onClick={changeText}><AiOutlineClose /></button>
        </div>
      </div>
      <textarea
        className='card_textarea'
        name='text'
        onChange={addNewText}
        defaultValue={props.card.text}>
      </textarea>
    </div>
  );

  if (props.onView) {
    return defaultMode;
  } else {
    return !editModeFlag ? defaultMode : editMode;
  }

};

export default Card;