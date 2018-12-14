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
      cards: CARD_DATA.cards,
    };
  }



  render() {

    const emoji = require("emoji-dictionary");

    let cardCollection = this.state.cards;

    const cards = cardCollection.map((card, i) => {
      return <Card
        key={i}
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
