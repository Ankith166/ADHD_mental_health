import { useQuiz } from "../contexts/QuizContext";
//import { useState } from "react";

function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  // const { val, changeval } = useState("");

  const hasAnswered = answer !== null;

  return (
    <>
      {question.options.length !== 0 && (
        <div className="options">
          {question.options.map((option, index) => (
            <button
              className={`btn btn-option ${index === answer ? "answer" : ""} ${
                hasAnswered ? (index === answer ? "correct" : "wrong") : ""
              }`}
              key={option}
              disabled={hasAnswered}
              onClick={() => dispatch({ type: "newAnswer", payload: index })}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      {/* {question.options.length === 0 && (
        <input
          type="text"
          value={val}
          onChange={(e) => changeval(e.target.value)}
        />
      )} */}
    </>
  );
}

export default Options;
