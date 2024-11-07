import React, { useEffect, useReducer } from "react";
import image from "../assets/image5.jpeg";
import Header from "./Header";
import Questions from "./Questions";
import Options from "./Options";
import Button from "./Button";
import { questions } from "../data/questions";
import { type } from "@testing-library/user-event/dist/type";

const initialState = {
  currQuestion: 0,
  result: null,
  correct: 0,
  wrong: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "nextQuestion":
      return {
        ...state,
        currQuestion:
          state.currQuestion === questions.length - 1
            ? 0
            : state.currQuestion + 1,
        result: null,
      };
    case "answerQuestion":
      return {
        ...state,
        result:
          questions[state.currQuestion].correctOption === action.payload
            ? questions[state.currQuestion].correctOption
            : questions[state.currQuestion].options.at(action.payload),
        correct:
          questions[state.currQuestion].correctOption === action.payload
            ? state.correct + 1
            : state.correct,
        wrong:
          questions[state.currQuestion].correctOption !== action.payload
            ? state.wrong + 1
            : state.wrong,
      };
    default:
      throw new Error("Invalid action");
  }
}

function Quiz() {
  const [{ currQuestion, result, wrong, correct }, dispatch] = useReducer(
    reducer,
    initialState
  );
  console.log(result);
  console.log(correct);
  console.log(wrong);
  return (
    <div className="">
      <Header currQuestion={currQuestion} />
      <Questions questions={questions} currQuestion={currQuestion} />
      <Options
        currQuestion={currQuestion}
        dispatch={dispatch}
        result={result}
      />
      <div className=" flex gap-3">
        <Button buttonstyle="bg-blue-700 h-10 w-20 my-10 text-white">
          Previous
        </Button>
        <Button
          onclick={() => dispatch({ type: "nextQuestion" })}
          buttonstyle="bg-green-700 h-10 w-20 my-10 text-white"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
