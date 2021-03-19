import React, { useState, useEffect } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { onSave } from '../../../Store/Actions';

const FullCard = props => {
  const [fullcard, setFullState] = useState({})
  const { cards } = useSelector(state => (state));
  const dispatch = useDispatch();
  const onSaveChanges = index => { dispatch(onSave(cards, index)) };

  useEffect(() => {
    setFullState(cards.find(item => (item.id === props.match.params.id)))
  }, [cards, props.match.params.id])

  const onFullSave = () => {
    onSaveChanges(fullcard)
    props.history.push('/')
  }

  const onFullCancel = () => {
    props.history.push('/')
  }

  const addNewText = event => {
    setFullState({
      ...fullcard,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className='fullcard_block'>
      <input className='fullcard' type='text' name='title'
        defaultValue={fullcard.title} onChange={addNewText} />
      <textarea className='card_textarea fullcard'
        onChange={addNewText}
        name='text'
        defaultValue={fullcard.text}>
      </textarea>
      <div className='fullcard_block_nav'>
        <button className='buttons' onClick={onFullSave}>Save</button>
        <button className='buttons' onClick={onFullCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default FullCard
