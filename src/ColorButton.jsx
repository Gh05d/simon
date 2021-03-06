import React from "react";

export default ({ color, id, value, active, makeMove, clickable }) => {
  return (
    <button
      onClick={e => makeMove(e.target.value)}
      value={value}
      key={id}
      id={`simon-button-${id}`}
      style={active == value ? { background: color } : {}}
      disabled={!clickable}
    />
  );
};
