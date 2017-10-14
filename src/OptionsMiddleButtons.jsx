import React from "react";

export default props => (
  <div className="w3-row">
    <div className="w3-third">
      <div id="counter">
        {props.count < 9 && props.count > 0 ? `0${props.count}` : props.count}
      </div>
      <div className="simon-button-label">Count</div>
    </div>
    <div className="w3-third simon-button-label">
      <button onClick={props.clickStart} id="simon-button-start">
        .
      </button>
      <div style={{ paddingLeft: "13px" }}>Start</div>
    </div>
    <div className="w3-third simon-button-label">
      {props.strict ? (
        <i className="fa fa-circle-o" />
      ) : (
        <i className="fa fa-check-circle-o" />
      )}
      <button onClick={props.clickStrict} id="simon-button-strict">
        .
      </button>
      <div>Strict</div>
    </div>
  </div>
);
