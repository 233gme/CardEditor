import React, { useState } from 'react';
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import './style.css';

const Card = (props) => {
  // Card style switcher (card selection)
  let [chooseСardFlag, setChooseСardState] = useState(false);
  const selectItem = () => setChooseСardState(!chooseСardFlag);
  const cls = chooseСardFlag === false ? 'card_is_green' : 'card_is_red';

  // Adding new values to cards
  const [newState, setNewState] = useState({
    ...props.card
  });

  // Adding text
  const addNewText = event => {
    setNewState({
      ...newState,
      [event.target.name]: event.target.value
    });
  };

  // Save text 
  const saveChenges = () => {
    const data = newState;
    data.editModeFlag = false;
    setNewState({
      ...data
    });
    props.saveNewChanges(newState);
  };
  
  // Enable card editing mode
  const editModeOn = () => {
    const data = newState;
    data.editModeFlag = true;
    setNewState({
      ...data
    });
    setChooseСardState(chooseСardFlag = false)
    props.saveNewChanges(newState);
  }

  // Undo all changes
  const abortChanges = () => {
    const data = props.card;
    data.editModeFlag = false;
    setNewState({
      ...data
    });
    props.saveNewChanges(data);
  }

  const defaultMode = (
    < div className={`card ${cls}`}>
      <div className='card_title'>
        <p>{props.card.title}</p>
        <div>
          {props.onView ? null : <button title='режим редактирования' onClick={editModeOn}>
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
          <button title='сохранить изменения' onClick={saveChenges}><AiOutlineCheck /></button>
          <button title='отменить изменения' onClick={abortChanges}><AiOutlineClose /></button>
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

  return props.card.editModeFlag ? editMode : defaultMode;

};

export default Card;