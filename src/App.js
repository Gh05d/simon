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
  nullPlayerCount,
  mistake
} from "./GameActions";
import { startGame, toggleClickable } from "./ButtonActions";
import { moves, buttons } from "./constants";
import ColorButton from "./ColorButton";

class App extends Component {
  componentDidUpdate() {
    const { count, playerCount, game } = this.props;
    if (count == 20 && playerCount == 20) {
      return this.props.win();
    }
    //If the Player clicked the "right" buttons, then continue
    if (count == playerCount && game) {
      this.props.nullPlayerCount();
      _.delay(() => this.aiPlay(), 1000);
    }
  }

  onButtonClick(move) {
    //Only make a move when a game is on
    if (this.props.game && this.props.clickable) {
      let clickedButton = this.props.moves[this.props.playerCount];
      const { strict, mistake } = this.props;
      //Check whether the Player clicked the right button
      if (move == clickedButton) {
        this.props.addPlayerMove(move);
        //If not end the game and reset
      } else if (move !== clickedButton && strict) {
        console.log("U lose!", strict);
        this.props.reset();
        _.delay(() => {
          this.props.startGame(_.sample(moves));
          setTimeout(() => this.props.setActive(""), 1000);
        }, 1000);
      } else if (move !== clickedButton && !strict) {
        this.props.toggleClickable();
        console.log("Mistake!", strict);
        //Show the user an error and after that continue counting
        let saveCount = this.props.count;
        mistake("!!");
        _.delay(() => mistake(saveCount), 1000);
        this.showPressedButtons(this.props.moves);
        this.props.nullPlayerCount();
      }
    }
  }

  showPressedButtons(btns) {
    btns.map((btn, i) => {
      soundBoard[btn].play();
      _.delay(() => this.props.setActive(btn), (i + 1) * 950);
      //If the same button blinks, make sure that there is short pause between
      _.delay(() => this.props.setActive(""), (i + 1) * 1100);
    });
    //Make the buttons clickable again
    _.delay(() => this.props.toggleClickable(), btns.length * 1200);
  }

  aiPlay() {
    //Check whether the player has won
    if (this.props.game == "WIN") {
      return console.log("You have won! Congrats");
    }
    //Prevent the player from being able to press buttons
    this.props.toggleClickable();

    let move = _.sample(moves);
    let allMoves = this.props.moves;
    //Add a random button press to the moves array
    this.props.addMove(move);
    allMoves.push(move);
    //Show the Player all the buttons which were pressed
    this.showPressedButtons(allMoves);
  }

  render() {
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
                clickable={this.props.clickable}
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
    playerCount: game.playerCount,
    strict: game.strict,
    clickable: game.clickable
  };
}

export default connect(mapStateToProps, {
  reset,
  addMove,
  win,
  addPlayerMove,
  setActive,
  nullPlayerCount,
  toggleClickable,
  startGame,
  mistake
})(App);
