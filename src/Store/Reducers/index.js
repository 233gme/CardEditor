const initialState = {
  cards: [],
  view: false
};

const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CARDS':
      return { ...state, cards: action.payload }
    case 'ON_SAVE':
      return { ...state, cards: action.payload }
    case 'ON_VIEW':
      return { ...state, cards: action.payload.cards, view: action.payload.view }
    case 'ON_ADD':
      return { ...state, cards: action.payload }
    case 'ON_DELETE':
      return { ...state, cards: action.payload }
    default: {
      return state
    }
  }

};

export default rootReduser;