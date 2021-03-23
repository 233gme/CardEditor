import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onSave } from '../../../Store/Actions/actions';
import Card from '../../CardList/Card';

const FullCard = props => {
  const { cards, view } = useSelector(state => (state));
  const dispatch = useDispatch();
  const onSaveChanges = id => { dispatch(onSave(cards, id)) };
  const [fullcard, setFullState] = useState({});

  useEffect(() => {
    let card = cards.find(item => (item.id === props.match.params.id))
    if (card) setFullState(card)
    else props.history.push('/404')
  }, [cards, props.match.params.id, props.history])

  return (
    <div className='fullcard_block'>
      <Card
        card={fullcard}
        onView={view}
        onSaveChanges={(val) => onSaveChanges(val)}
        route={props} />
    </div>
  )
}

export default FullCard;
