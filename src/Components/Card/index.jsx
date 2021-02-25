import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

import './style.css';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../HOC/withLoadingDelay';

const Card = (props) => {
  // console.log(typeof props.card)

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

  return (
    <Fragment>
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
    </Fragment>
  )

};

Card.propTypes = {
  card: PropTypes.object,
  onView: PropTypes.bool,
  editModeOn: PropTypes.func,
  selectItem: PropTypes.func,
  addNewText: PropTypes.func,
  saveChenges: PropTypes.func,
  abortChanges: PropTypes.func,
}

export default withLoadingDelay(Card);