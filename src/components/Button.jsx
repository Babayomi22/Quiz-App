import React from "react";

function Button({ children, buttonstyle, onclick }) {
  return (
    <button onClick={onclick} className={buttonstyle}>
      {children}
    </button>
  );
}

export default Button;
