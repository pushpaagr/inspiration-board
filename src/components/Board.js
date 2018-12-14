import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }


  componentDidMount() {
    const GET_ALL_CARDS_URL = "https://inspiration-board.herokuapp.com/boards/Pushpa/cards";

    axios.get(GET_ALL_CARDS_URL)
    .then((response) => {
      console.log(response.data);
      this.setState({
        cards: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }


  deletecard = (id) => {

    const DELETE_CARD = `https://inspiration-board.herokuapp.com/cards/${id}`

    axios.delete(DELETE_CARD)
    .then(() => {
      const cardArray = this.state.cards
      const removeCardIndex = cardArray.findIndex(card => card.id === id)
      cardArray.splice(removeCardIndex, 1)

      this.setState({
        cards: cardArray
      });

    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    })




  }

  render() {

    const emoji = require("emoji-dictionary");

    let cardCollection = this.state.cards;

    const cards = cardCollection.map((card, i) => {
      card = card.card;
      console.log(card);
      console.log(card.text);
      return <Card
        key={card.id}
        id={card.id}
        text={card.text}
        emoji={emoji.getUnicode(`${card.emoji}`)}
        deleteCardCallback={this.deletecard}/>
    });

    return (
      <div>
        {cards}
      </div>
    )
  }

}




Board.propTypes = {


};

export default Board;
