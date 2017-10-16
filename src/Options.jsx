import React from "react";
import OptionsMiddleButtons from "./OptionsMiddleButtons";

export default props => (
  <div id="middle">
    <h1>Simon</h1>
    <OptionsMiddleButtons
      count={props.count}
      strict={props.strict}
      clickStrict={props.clickStrict}
      clickStart={props.clickStart}
    />
    <div id="switch-row">
      <span className="w3-center">Off</span>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider" />
      </label>
      <span className="w3-center">On</span>
    </div>
  </div>
);
