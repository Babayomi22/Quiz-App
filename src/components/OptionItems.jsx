import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { questions } from "../data/questions";
function OptionItems({
  option,
  dispatch,
  index,
  currQuestion,
  result,
  hasAnswered,
}) {
  
  return (
    <div>
      <li
      
        key={index}
        onClick={() => dispatch({ type: "answerQuestion", payload: index })}
        className={` ${
          index === result ? " bg-green-600" : ""
        } text-black/90 flex gap-3 bg-black/5  items-center lg:w-8/12 cursor-pointer text-sm border h-10 px-2  border-black/10 ${
          hasAnswered
            ? index === questions[currQuestion].correctOption
              ? "bg-green-600"
              : ""
            : ""
        }
            ${option === result ? " bg-red-600" : ""}
            
      
         }`}
      >
        <span>
          <input type="radio" onChange={() => {}} />
        </span>
        {option}
      </li>
    </div>
  );
}

export default OptionItems;
