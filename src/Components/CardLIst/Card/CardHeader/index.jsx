import React from 'react';
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import './style.css';

const CardHeader = (props) => {

  const defaultMode = (
    <div className='card_title'>
      <p>{props.card.title}</p>
      <div className='card_title_buttons'>
        {props.onView ? null : <button title='режим редактирования' onClick={props.editModeOn}><AiFillEdit /></button>}
        <input className='card_checbox' type="checkbox" onClick={props.selectItem}></input>
      </div>
    </div>
  );

  const editMode = (
    <div className='card_title'>
      <input type={'text'} name='title' onChange={props.addNewText} defaultValue={props.card.title}></input>
      <div className='card_title_buttons'>
        <button title='сохранить изменения' onClick={props.saveChenges}><AiOutlineCheck /></button>
        <button title='отменить изменения' onClick={props.abortChanges}><AiOutlineClose /></button>
      </div>
    </div>
  )

  return props.card.editModeFlag ? editMode : defaultMode;
};

export default CardHeader;