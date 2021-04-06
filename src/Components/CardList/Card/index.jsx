import React, { useState } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../HOC/withLoadingDelay';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onSave } from '../../../Store/Actions/card';
import './style.css';

const Card = props => {
  const { cards, view } = useSelector(state => (state.cards));
  const dispatch = useDispatch();
  const history = useHistory();

  const [newState, setNewState] = useState({ ...props.card });

  const selectItem = () => {
    dispatch(onSave(cards, { ...newState, chooseСardFlag: !props.card.chooseСardFlag }))
  };

  const addNewText = event => {
    setNewState({...newState, [event.target.name]: event.target.value});
  };

  const editModeOn = () => {
    dispatch(onSave(cards, { ...newState, editModeFlag: true, chooseСardFlag: false }));
    setNewState({...newState, editModeFlag: true, chooseСardFlag: false});
  };

  const saveChenges = () => {
    dispatch(onSave(cards, { ...newState, editModeFlag: false }));
  };

  const abortChanges = () => {
    dispatch(onSave(cards, { ...props.card, editModeFlag: false }));
    setNewState({ ...props.card, editModeFlag: false })
  };

  const toFullCardPage = () => {
    if (!props.card.editModeFlag) {
      history.push('/card/' + newState.id)
      dispatch(onSave(cards, { ...newState, chooseСardFlag: false }))
    }
  };

  return (
    <div style={{ minHeight: '100%' }} onDoubleClick={toFullCardPage}>
      <CardHeader
        card={props.card}
        onView={view}
    editModeOn={editModeOn}
    selectItem={selectItem}
    addNewText={addNewText}
    saveChenges={saveChenges}
    abortChanges={abortChanges} />
      <CardBody
        card={props.card}
    addNewText={addNewText} />
  </div>
  )
};

Card.propTypes = {
  card: PropTypes.object,
  onView: PropTypes.bool,
  editModeOn: PropTypes.func,
  selectItem: PropTypes.func,
  addNewText: PropTypes.func,
  saveChenges: PropTypes.func,
  abortChanges: PropTypes.func
};

export default withLoadingDelay(Card);