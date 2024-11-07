import React from "react";

function Questions({ questions, currQuestion }) {
  return (
    <div className="  py-10 ">
      <h1 className="sm:text-xl text-center sm:text-left">
        {questions[currQuestion].question}
      </h1>
    </div>
  );
}

export default Questions;
