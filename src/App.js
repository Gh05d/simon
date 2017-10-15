import React, { Component } from "react";
import Options from "./Options";
import _ from "lodash";
import { soundBoard } from "./sounds";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      playerCounter: 0,
      strict: false,
      moves: [],
      active: "",
      game: false
    };
  }

  renderButtons(buttons) {
    return buttons.map(({ value, id, color }) => (
      <button
        onClick={e => this.playerClick(e.target.value)}
        value={value}
        key={id}
        id={`simon-button-${id}`}
        className="w3-half"
        style={this.state.active == value ? { background: color } : {}}
      />
    ));
  }

  onClickStrict() {
    this.setState({ strict: !this.state.strict });
  }

  onClickStart() {
    this.setState({ counter: 0, game: true });
    this.playGame();
  }

  playGame() {
    const simonButtons = ["upperLeft", "upperRight", "lowerLeft", "lowerRight"];
    let currentButton = _.sample(simonButtons);
    let currentButtons = this.state.moves;
    currentButtons.push(currentButton);

    //Save the lighted buttons so that the player can play
    let after = _.after(currentButtons.length, () => {
      this.setState(
        {
          moves: currentButtons,
          active: "",
          counter: this.state.counter + 1,
          playerCounter: 0
        },
        console.log(currentButton)
      );
    });

    //Highlight the selected buttons, then invoke saveMoves
    currentButtons.map((button, counter) => {
      if (counter == 0) {
        counter++;
      }
      _.delay(() => this.setState({ active: button }, after), counter * 1000);
    });
  }

  playerClick(pressedButton) {
    console.log(soundBoard[0]);
    soundBoard[0].play();
    //Don't do anything if there is no active game
    if (!this.state.game) {
      return; //Check if the player has to push buttons
    } else if (this.state.playerCounter < this.state.counter) {
      //Check whether the player pushed the right Button
      if (pressedButton != this.state.moves[this.state.playerCounter]) {
        return this.setState({ game: false, moves: [] }, () =>
          console.log("U Lost, Bro")
        );
      } //If he pushed the right button, increment his counter
      this.setState({ playerCounter: this.state.playerCounter + 1 }, () => {
        //Let the computer make the next move if the player pushed all buttons
        if (this.state.playerCounter == this.state.counter) {
          return this.playGame();
        }
      });
    }
  }

  render() {
    const simonUpperButtons = [
      { value: "upperLeft", id: "upper-left", color: "#e00" },
      { value: "upperRight", id: "upper-right", color: "#00d119" }
    ];

    const simonLowerButtons = [
      { value: "lowerLeft", id: "lower-left", color: "#0017e6" },
      { value: "lowerRight", id: "lower-right", color: "#fff000" }
    ];

    return (
      <div id="wrapper">
        <div id="simon" className="w3-container" style={{ padding: "0px" }}>
          <div className="w3-row">{this.renderButtons(simonUpperButtons)}</div>
          <div id="middle">
            <Options
              count={this.state.counter}
              strict={this.state.strict}
              clickStrict={() => this.onClickStrict()}
              clickStart={() => this.onClickStart()}
            />
          </div>
          <div className="w3-row">{this.renderButtons(simonLowerButtons)}</div>
        </div>
      </div>
    );
  }
}

export default App;
