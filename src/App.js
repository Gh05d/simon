import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="simon" className="w3-container">
          <div className="w3-row">
            <div className="w3-half simon-button-big">Links oben</div>
            <div className="w3-half simon-button-big">Rechts oben</div>
          </div>
          <div className="w3-row" id="middle">
            <div className="w3-container">
              <h1>Simon</h1>
              <div className="w3-row">
                <div className="w3-third">
                  <div id="counter">00</div>
                  <div className="simon-button-label">Count</div>
                </div>
                <div className="w3-third simon-button-label">
                  <button id="simon-button-start">.</button>
                  <div style={{ paddingLeft: "13px" }}>Start</div>
                </div>
                <div className="w3-third simon-button-label">
                  <button id="simon-button-strict">.</button>
                  <div>Strict</div>
                </div>
              </div>
              <div className="w3-row">
                <div>On Button Off</div>
              </div>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-half simon-button-big">Links unten</div>
            <div className="w3-half simon-button-big">Rechts unten</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
