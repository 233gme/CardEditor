import React, { useState } from 'react';
import Card from './Card';
import { AiFillDelete } from "react-icons/ai";
import './style.css'

const CardList = () => {
  const [state, setstate] = useState({
    cards: [
      {
        id: '1',
        title: 'Caption',
        text: 'Jingle bells, jingle bells, Jingle all the way Oh, what fun it is to ride In a one horse open sleigh.',
        editModeFlag: false,
        cardSelectionFlag: false,
      },
      {
        id: '2',
        title: 'Title 2',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.',
        editModeFlag: false,
        cardSelectionFlag: false,
      },
      {
        id: '3',
        title: 'Title 3',
        text: 'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero.',
        editModeFlag: false,
        cardSelectionFlag: false,
      },
      {
        id: '4',
        title: 'Title 4',
        text: 'Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        editModeFlag: false,
        cardSelectionFlag: false,
      },
      {
        id: '5',
        title: 'Title 5',
        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage.',
        editModeFlag: false,
        cardSelectionFlag: false,
      },
      {
        id: '6',
        title: 'Title 6',
        text: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        editModeFlag: false,
        cardSelectionFlag: false,
      },
      {
        id: '7',
        title: 'Title 7',
        text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        editModeFlag: false,
        cardSelectionFlag: false,
      },
      {
        id: '8',
        title: 'Title 8',
        text: 'Cicero, written in 45 BC. book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        editModeFlag: false,
        cardSelectionFlag: false,
      },
      {
        id: '9',
        title: 'Title 9',
        text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
        editModeFlag: false,
        cardSelectionFlag: false,
      },
      {
        id: '10',
        title: 'Title 10',
        text: 'by injected humour, or randomised words which look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
        editModeFlag: false,
        cardSelectionFlag: false,
      },
    ],
    viewModeFlag: false,
  });

  const saveNewChanges = (value) => {
    const itemIndex = state.cards.findIndex((item => {
      return item.id === value.id
    }));
    let card = { ...state.cards[itemIndex] };
    card = { ...value };
    const newCardState = [...state.cards];
    newCardState[itemIndex] = card;
    setstate({ cards: newCardState });
  }

  const viewHandler = () => {
    const newCardsState = [];
    [...state.cards].forEach(item => {
      newCardsState.push({ ...item, editModeFlag: false });
    });
    setstate({
      cards: newCardsState,
      viewModeFlag: !state.viewModeFlag,
    });
  }

  const deleteCards = () => {
    const newCardsState = [];
    [...state.cards].forEach(item => {
      if (item.cardSelectionFlag === false) {
        newCardsState.push(item)
      }
    })
    setstate({
      cards: newCardsState,
    });
  }

  return (
    <div>
      <div className="nav_block">
        <p><input className='view_mode_btn' onClick={viewHandler} type="checkbox" id='check1' />view only</p>
        <p><button className='del_mode_btn' onClick={deleteCards}><AiFillDelete /></button>delete items</p>
      </div>
      <div className='main'>
        {state.cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              onView={state.viewModeFlag}
              saveNewChanges={saveNewChanges}
            />
          )
        })}
      </div>
    </div>
  )

}

export default CardList