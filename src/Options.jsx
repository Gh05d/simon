import React, { Component } from "react";
import { connect } from "react-redux";
import {
  togglePower,
  strictMode,
  startGame,
  toggleClickable
} from "./ButtonActions";
import { setActive } from "./GameActions";
import OptionsMiddleButtons from "./OptionsMiddleButtons";
import _ from "lodash";
import { moves } from "./constants";

class Options extends Component {
  onStart() {
    if (this.props.power) {
      this.props.startGame(_.sample(moves));
      _.delay(() => this.props.setActive(""), 500);
      this.props.toggleClickable();
      _.delay(() => this.props.toggleClickable(), 501);
    }
  }

  render() {
    return (
      <div id="middle">
        <h1>Simon</h1>
        <OptionsMiddleButtons
          count={this.props.count}
          power={this.props.power}
          strict={this.props.strict}
          clickStrict={this.props.strictMode}
          clickStart={this.onStart.bind(this)}
        />
        <div id="switch-row">
          <span className="w3-center">Off</span>
          <label className="switch">
            <input type="checkbox" onClick={this.props.togglePower} />
            <span className="slider" />
          </label>
          <span className="w3-center">On</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ game: { power, strict, count } }) {
  return { power, strict, count };
}

export default connect(mapStateToProps, {
  setActive,
  togglePower,
  toggleClickable,
  strictMode,
  startGame
})(Options);
