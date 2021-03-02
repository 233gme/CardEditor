import React from 'react';
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const CardHeader = props => {

  const defaultMode = (
    <div className='card_title'>
      <p>{props.card.title}</p>
      <div>
        {!props.onView && <button title='режим редактирования' onClick={props.editModeOn}><AiFillEdit /></button>}
        <input className='card_checbox' type='checkbox' onClick={props.selectItem} />
      </div>
    </div>
  );

  const editMode = (
    <div className='card_title'>
      <input type='text' name='title'
        onChange={props.addNewText}
        defaultValue={props.card.title} />
      <div>
        <button onClick={props.saveChenges}><AiOutlineCheck /></button>
        <button onClick={props.abortChanges}><AiOutlineClose /></button>
      </div>
    </div>
  );

  return props.card.editModeFlag ? editMode : defaultMode;
}

export default CardHeader;