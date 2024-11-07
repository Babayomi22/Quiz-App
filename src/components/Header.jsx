import React from "react";
import { questions } from "../data/questions";
function Header({ currQuestion }) {
  return (
    <div className=" bg-green-800 text-white sm:flex-row flex-col items-center gap-2 flex p-5">
      <h1 className=" flex-1 font-semibold text-2xl">React Quiz</h1>
      <h1>
        {currQuestion === 0 ? (
          <span>Total Questions: {questions.length}</span>
        ) : (
          <span>Remaining Questions: {questions.length - currQuestion}</span>
        )}
      </h1>
    </div>
  );
}

export default Header;
