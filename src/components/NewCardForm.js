import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]



class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      emoji: "",
    };

  }

  resetState = () => {
    this.setState ({
      text: '',
      emoji: '',
    });
  }


  onFormChange = (event) => {
    const text = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[text] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { text, emoji} = this.state;

    if (text === '' || emoji === '') return;

    this.props.addCardCallback(this.state);
    this.resetState();
  }



  render() {
    return(
      <form onSubmit={this.onSubmit} className="new-card-form">

        <div>
          <textarea className="new-card-form__form-textarea" name="text" onChange={this.onFormChange}
            value={this.state.text}></textarea>
        </div>

        <div>
          <label className="new-card-form__form-label" htmlFor="Emoji">Emoji:</label>
          <input name="emoji" placeholder="emoji" onChange={this.onFormChange}
            value={this.state.emoji} />
        </div>

        <input className="new-card-form__form-button" type="submit" name="submit" value="Add a Card" />


      </form>
    );
  }


}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
