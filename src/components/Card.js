import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      text: this.props.text,
      emoji: this.props.emoji
    }
  }


  render() {

    return (
      <div className="card">
        <h1>{this.state.text}</h1>
        <p>{this.state.emoji}</p>
        <button
          onClick={() => this.props.deleteCardCallback(this.state.id)}
          type="button"
          aria-label="Remove"
          >
          Remove
        </button>


      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func,


};

export default Card;
