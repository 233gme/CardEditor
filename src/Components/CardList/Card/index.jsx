import React, { useState } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../HOC/withLoadingDelay';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './style.css';

export const Card = ({ card, onSaveChanges, view }) => {
  const history = useHistory();
  const [newState, setNewState] = useState({ ...card });

  const selectItem = () => {
    onSaveChanges({ ...newState, chooseСardFlag: !card.chooseСardFlag })
  };

  const addNewText = event => {
    onSaveChanges({ ...card });
    setNewState({...newState, [event.target.name]: event.target.value});
  };

  const editModeOn = () => {
    onSaveChanges({ ...newState, editModeFlag: true, chooseСardFlag: false });
     setNewState({...newState, editModeFlag: true, chooseСardFlag: false});
  };

  const saveChenges = () => {
    onSaveChanges({ ...newState, editModeFlag: false });
  };

  const abortChanges = () => {
    onSaveChanges({ ...card, editModeFlag: false });
    setNewState({ ...card, editModeFlag: false })
  };

  const toFullCardPage = () => {
    if (!newState.editModeFlag && !view) {
      history.push('/card/' + newState.id)
      onSaveChanges({ ...newState, chooseСardFlag: false })
    }
  };

  return (
  <div style={{ minHeight: '100%' }} onDoubleClick={toFullCardPage}>
      <CardHeader
        card={card}
        onView={view}
    editModeOn={editModeOn}
    selectItem={selectItem}
    addNewText={addNewText}
    saveChenges={saveChenges}
    abortChanges={abortChanges} />
      <CardBody
        card={card}
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