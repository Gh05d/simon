import React, { Component } from "react";
import Options from "./Options";
import _ from "lodash";
import { soundBoard } from "./sounds";
import { connect } from "react-redux";
import {
  addMove,
  win,
  addPlayerMove,
  setActive,
  reset,
  nullPlayerCount
} from "./GameActions";
import { moves } from "./constants";
import ColorButton from "./ColorButton";

class App extends Component {
  componentDidUpdate() {
    if (this.props.count == 3 && this.props.playerCount == 3) {
      return this.props.win();
    }
    //If the Player clicked the "right" buttons, then continue
    if (this.props.count == this.props.playerCount && this.props.game) {
      this.props.nullPlayerCount();
      _.delay(() => this.aiPlay(), 1000);
    }
  }

  onButtonClick(move) {
    //Only make a move when a game is on
    if (this.props.game) {
      //Check whether the Player clicked the right button
      if (move == this.props.moves[this.props.playerCount]) {
        this.props.addPlayerMove(move);
        //If not end the game and reset
      } else if (move == !this.props.moves[this.props.playerCount]) {
        console.log("U lose!");
        this.props.reset();
      }
    }
  }

  aiPlay() {
    //Check whether the player has won
    if (this.props.game == "WIN") {
      return console.log("You have won! Congrats");
    }

    let move = _.sample(moves);
    let allMoves = this.props.moves;
    //Add a random button press to the moves array
    this.props.addMove(move);
    allMoves.push(move);
    //Reset the current shown button for the next round
    let reset = _.after(allMoves.length, () =>
      _.delay(() => this.props.setActive(""), (allMoves.length + 1) * 1000)
    );
    //Show the Player all the buttons which were pressed
    allMoves.map((move, i) => {
      _.delay(() => this.props.setActive(move), (i + 1) * 1000);
      reset();
    });
  }

  render() {
    const buttons = [
      { value: "upperLeft", id: "upper-left", color: "red" },
      { value: "lowerLeft", id: "lower-left", color: "#4B0082" },
      { value: "upperRight", id: "upper-right", color: "#7CFC00" },
      { value: "lowerRight", id: "lower-right", color: "yellow" }
    ];

    return (
      <div id="wrapper">
        <div id="simon">
          {buttons.map(({ value, id, color }) => {
            return (
              <ColorButton
                key={id}
                value={value}
                id={id}
                color={color}
                makeMove={move => this.onButtonClick(move)}
                active={this.props.active}
              />
            );
          })}
          <Options />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ game }) {
  return {
    moves: game.moves,
    game: game.game,
    active: game.active,
    count: game.count,
    playerCount: game.playerCount
  };
}

export default connect(mapStateToProps, {
  reset,
  addMove,
  win,
  addPlayerMove,
  setActive,
  nullPlayerCount
})(App);
