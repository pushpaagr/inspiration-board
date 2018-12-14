import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {


  render() {

    return (
      <div className="card">
        <h1>{this.props.text}</h1>
        <p>{this.props.emoji}</p>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,

};

export default Card;
