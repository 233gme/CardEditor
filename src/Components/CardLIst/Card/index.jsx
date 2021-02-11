import React, { useState } from 'react';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import './style.css';

const Card = (props) => {
  // Adding new values to cards
  const [newState, setNewState] = useState({
    ...props.card,
  });

  // Card style switcher (card selection)
  const selectItem = () => {
    const data = newState;
    data.cardSelectionFlag = !newState.cardSelectionFlag;
    props.saveNewChanges(data);
  };
  const cls = props.card.cardSelectionFlag === false ? 'card_is_green' : 'card_is_red';

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
    props.saveNewChanges(data);
  };

  // Enable card editing mode
  const editModeOn = () => {
    const data = newState;
    data.editModeFlag = true;
    data.cardSelectionFlag = false;
    props.saveNewChanges(data);
  };

  // Undo all changes
  const abortChanges = () => {
    const data = props.card;
    data.editModeFlag = false;
    props.saveNewChanges(data);
  };

  return (
    < div className={`card ${cls}`}>
      <CardHeader
        card={props.card}
        onView={props.onView}
        editModeOn={editModeOn}
        selectItem={selectItem}
        addNewText={addNewText}
        saveChenges={saveChenges}
        abortChanges={abortChanges}
      />
      <CardBody
        card={props.card}
        addNewText={addNewText}
      />
    </div >
  )

};

export default Card;