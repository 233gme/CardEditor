import { v4 as uuidv4 } from 'uuid';

export const getCards = cards => ({
  type: 'GET_CARDS',
  payload: cards,
});

export const onSave = (state, card) => {
  const itemIndex = state.findIndex(item => (item.id === card.id));
  const newCardState = [...state];
  newCardState[itemIndex] = { ...card };
  return ({
    type: 'ON_SAVE',
    payload: newCardState,
  })
}

export const onView = (cards, view) => {
  return ({
    type: 'ON_VIEW',
    payload: {
      cards: [...cards].map(item => ({ ...item, editModeFlag: false })),
      view: view
    }
  })
}

export const onDelete = cards => {
  return ({
    type: 'ON_DELETE',
    payload: [...cards].filter(item => !item.chooseСardFlag)
  })
}

export const onAdd = cards => {
  return ({
    type: 'ON_ADD',
    payload: [...cards].concat({ id: uuidv4(), title: '', text: '', editModeFlag: false, chooseСardFlag: false, }),
  })
}
