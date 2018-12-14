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
    console.log("this did mount");
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








  render() {

    const emoji = require("emoji-dictionary");

    let cardCollection = this.state.cards;

    const cards = cardCollection.map((card, i) => {
      card = card.card;
      console.log(card);
      console.log(card.text);
      return <Card
        key={card.id}
        text={card.text}
        emoji={emoji.getUnicode(`${card.emoji}`)} />
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
