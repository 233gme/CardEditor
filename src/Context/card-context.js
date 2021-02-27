import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const CardContext = React.createContext();

const CardProvider = props => {
  const [cards, setCards] = useState([]);

  const [view, setView] = useState(false);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
      .then(res => {
        setCards(res.data.slice(0, 15).map(card => {
          return {
            id: uuidv4(),
            title: card.Name,
            text: card.About,
            editModeFlag: false,
            chooseСardFlag: false
          }
        }));
      })
      .catch(error => console.log(error))
  }, [setCards]);

  const onSave = value => {
    const itemIndex = cards.findIndex(item => (item.id === value.id));
    const newCardState = [...cards];
    newCardState[itemIndex] = { ...value };
    setCards(newCardState);
  }

  const onView = () => {
    setCards([...cards].map(item => ({ ...item, editModeFlag: false })));
    setView(!view);
  }

  const onDelete = () => {
    setCards([...cards].filter(item => !item.chooseСardFlag));
  }

  const onAdd = () => {
    setCards([...cards].concat({ id: uuidv4(), title: '', text: '', editModeFlag: false, chooseСardFlag: false, }));
  }

  return (
    <CardContext.Provider value={{ cards, view, onSave, onView, onDelete, onAdd, counter: () => cards.length }}>
      {props.children}
    </CardContext.Provider>
  )
}

export default CardProvider;