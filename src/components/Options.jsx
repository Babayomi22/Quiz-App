import React, { useState } from "react";
import { questions } from "../data/questions";
import OptionItems from "./OptionItems";
function Options({ currQuestion, dispatch, result }) {
  const hasAnswered = result !== null;
  const [newstyle, setNewStyle] = useState("");
  function checking(currOption, index) {
    if (questions[currQuestion].options[index] === currOption) {
      setNewStyle("bg-red-600");
    }
  }
  return (
    <div className=" ">
      <ul className=" flex flex-col gap-3">
        {questions[currQuestion].options.map((option, index) => (
          <OptionItems
            key={index}
            hasAnswered={hasAnswered}
            option={option}
            index={index}
            result={result}
            currQuestion={currQuestion}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
}

export default Options;
