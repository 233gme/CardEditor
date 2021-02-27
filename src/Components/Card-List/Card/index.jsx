import React, { useState, Fragment } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../HOC/withLoadingDelay';
import PropTypes from 'prop-types';
import './style.css';

const Card = props => {
  const [newState, setNewState] = useState({
    ...props.card
  });

  const selectItem = () => {
    props.onSaveChanges({
      ...newState,
      chooseСardFlag: !props.card.chooseСardFlag
    })
  };

  const addNewText = event => {
    setNewState({
      ...newState,
      [event.target.name]: event.target.value
    });
  };

  const editModeOn = () => {
    props.onSaveChanges({
      ...newState,
      editModeFlag: true,
      chooseСardFlag: false
    });
  }

  const saveChenges = () => {
    props.onSaveChanges({
      ...newState,
      editModeFlag: false
    });
  };

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
  abortChanges: PropTypes.func
};

export default withLoadingDelay(Card);