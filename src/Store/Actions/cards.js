import axios from 'axios';

export const fetchCards = () => dispatch => {
  axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
      .then(({ data }) => {
        dispatch(getCards(data.slice(0, 15).map(card => ({
          id: card.Number,
          title: card.Name,
          text: card.About,
          editModeFlag: false,
          chooseСardFlag: false
        }
        ))))
      })
      .catch(error => console.log(error))
}

export const getCards = cards => ({
  type: 'GET_CARDS',
  payload: cards,
});