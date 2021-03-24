import React from 'react';
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Route } from 'react-router-dom';

const CardHeader = props => {
  const defaultMode = (
    <div className='card_title'>
      <p>{props.card.title}</p>
      <div className='card_title__btn_block'>
        <Route path='/' exact>
          <input className='card_checbox' type='checkbox' onClick={props.selectItem} />
        </Route>
        {!props.onView && <button onClick={props.editModeOn}><AiFillEdit /></button>}
      </div>
    </div>
  );

  const editMode = (
    <div className='card_title'>
      <input type='text' name='title' onChange={props.addNewText} defaultValue={props.card.title} />
      <div className='card_title__btn_block'>
        <button onClick={props.abortChanges}><AiOutlineClose /></button>
        <button onClick={props.saveChenges}><AiOutlineCheck /></button>
      </div>
    </div>
  );

  return props.card.editModeFlag ? editMode : defaultMode;
}

export default CardHeader;