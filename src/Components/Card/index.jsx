import React, { useState } from 'react';
import './style.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = (props) => {
  // Adding new text into the card
  const [newState, setNewState] = useState({
    ...props.card
  });

  // Card style switcher (card selection)
  const selectItem = () => {
    props.onSaveChanges({
      ...newState,
      chooseСardFlag: !props.card.chooseСardFlag
    })
  };

  // Adding text
  const addNewText = event => {
    setNewState({
      ...newState,
      [event.target.name]: event.target.value
    });
  };

  // Enable card editing mode
  const editModeOn = () => {
    props.onSaveChanges({
      ...newState,
      editModeFlag: true,
      chooseСardFlag: false
    });
  }

  // Save new text 
  const saveChenges = () => {
    props.onSaveChanges({
      ...newState,
      editModeFlag: false
    });
  };

  // Undo all changes
  const abortChanges = () => {
    props.onSaveChanges({
      ...props.card,
      editModeFlag: false
    });
    setNewState({
      ...props.card,
      editModeFlag: false
    })
  }

  const cls = props.card.chooseСardFlag === false ? 'card_is_green' : 'card_is_red';

  return (
    < div className={`card ${cls}`}>
      <CardHeader
        card={props.card}
        onView={props.onView}
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

export default Card;