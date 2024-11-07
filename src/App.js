import { type } from "@testing-library/user-event/dist/type";
import "./App.css";
import { useReducer } from "react";
import { questions } from "./data/questions";
import Quiz from "./components/Quiz";
import StartPage from "./components/StartPage";

function App() {
  const initialState = {};
  return (
    <div className={`grid min-h-screen px-6 sm:px-28`}>
      {/*  <StartPage /> */}
      <Quiz />
    </div>
  );
}

export default App;
