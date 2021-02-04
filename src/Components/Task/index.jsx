import React, { useState } from 'react';
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import './style.css';

const Task = (props) => {
  // Flag for highlight the card
  let [classFlag, setClassState] = useState(true);
  const selectItem = () => setClassState(!classFlag);

  // Stage for type of button and adding input fields
  let [editFlag, setTaskState] = useState(true);
  const changeText = () => {
    setClassState(classFlag = true);
    setTaskState(!editFlag);
  };

  // Intermediate storage facility for text
  const newTextObj = { ...props.task };
  // Add text from input and textarea
  const newText = event => newTextObj[event.target.name] = event.target.value;

  const saveText = () => {
    props.newTextChangeHandler(newTextObj);
    setTaskState(editFlag = true);
  };

  const normalState = (
    < div className={classFlag === true ? 'task task_is_green' : 'task task_is_red'}>
      <div className='task_title'>
        <p>{props.task.title}</p>
        <div>
          <button title='режим редактирования' onClick={changeText}><AiFillEdit /></button>
          <input type="checkbox" onClick={selectItem}></input>
        </div>
      </div>
      <p className='task_text'>{props.task.text}</p>
    </div >
  );

  const editState = (
    <div className='task task_is_green'>
      <div className='task_title'>
        <input type={'text'} name='title' onChange={newText} defaultValue={props.task.title}></input>
        <div>
          <button title='сохранить изменения' onClick={saveText}><AiOutlineCheck /></button>
          <button title='отменить изменения' onClick={changeText}><AiOutlineClose /></button>
        </div>
      </div>
      <textarea className='task_textarea' name='text' onChange={newText} defaultValue={props.task.text}></textarea>
    </div>
  );

  const viewState = (
    < div className='task task_is_green'>
      <div className='task_title'>
        <p>{props.task.title}</p>
      </div>
      <p className='task_text'>{props.task.text}</p>
    </div >
  );

  if (props.view) {
    return viewState;
  } else {
    return editFlag ? normalState : editState;
  }
};

export default Task;