import React, { Component } from 'react';
import Header from '../Components/Header';
import './App.css';
import CardList from '../Components/CardList';

class App extends Component {
  state = {
    cards: [
      {
        id: 'b1',
        title: 'Caption',
        text: 'Jingle bells, jingle bells, Jingle all the way Oh, what fun it is to ride In a one horse open sleigh.',
        editModeFlag: false,
        chooseСardFlag: false,
      },
      {
        id: 'n2',
        title: 'Title 2',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.',
        editModeFlag: false,
        chooseСardFlag: false,
      },
      {
        id: 'j3',
        title: 'Title 3',
        text: 'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero.',
        editModeFlag: false,
        chooseСardFlag: false,
      },
      {
        id: 'n4',
        title: 'Title 4',
        text: 'Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        editModeFlag: false,
        chooseСardFlag: false,
      },
      {
        id: 'u5',
        title: 'Title 5',
        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage.',
        editModeFlag: false,
        chooseСardFlag: false,
      },
      {
        id: 'i6',
        title: 'Title 6',
        text: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        editModeFlag: false,
        chooseСardFlag: false,
      },
      {
        id: 'b7',
        title: 'Title 7',
        text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        editModeFlag: false,
        chooseСardFlag: false,
      },
      {
        id: 'v8',
        title: 'Title 8',
        text: 'Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        editModeFlag: false,
        chooseСardFlag: false,
      },
      {
        id: 's9',
        title: 'Title 9',
        text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
        editModeFlag: false,
        chooseСardFlag: false,
      },
      {
        id: 'm10',
        title: 'Title 10',
        text: 'by injected humour, or randomised words which look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
        editModeFlag: false,
        chooseСardFlag: false,
      },
    ],
    viewMode: false,
  };

  saveNewChanges = (value) => {
    const itemIndex = this.state.cards.findIndex(item => (item.id === value.id));
    const newCardState = [...this.state.cards];
    newCardState[itemIndex] = { ...value };
    this.setState({ cards: newCardState });
  }

  viewHandler = () => {
    this.setState({
      cards: [...this.state.cards].map(item => ({ ...item, editModeFlag: false })),
      viewMode: !this.state.viewMode
    });
  }

  deleteHandler = () => {
    this.setState({
      cards: [...this.state.cards].filter(item => !item.chooseСardFlag)
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          viewHandler={this.viewHandler}
          deleteHandler={this.deleteHandler} />
        <CardList
          data={this.state}
          saveNewChanges={this.saveNewChanges} />
      </div>
    )
  }
}

export default App 