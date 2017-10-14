import React, { Component } from "react";
import Options from "./Options";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      strict: false
    };
  }

  onClickStrict() {
    this.setState({ strict: !this.state.strict });
  }

  onClickStart() {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <div id="wrapper">
        <div id="simon" className="w3-container" style={{ padding: "0px" }}>
          <div className="w3-row">
            <div className="w3-half" id="simon-button-upper-left" />
            <div className="w3-half" id="simon-button-upper-right" />
          </div>
          <div id="middle">
            <Options
              count={this.state.counter}
              strict={this.state.strict}
              clickStrict={() => this.onClickStrict()}
              clickStart={() => this.onClickStart()}
            />
          </div>
          <div className="w3-row">
            <div className="w3-half" id="simon-button-lower-left" />
            <div className="w3-half" id="simon-button-lower-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
