import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome Parent!</h2>
      <h3>{numQuestions} questions to help us test your ward !!!</h3>
      <h4>
        <i>
          Please make sure you check the answer properly before selecting as you
          CANNOT CHANGE it after it is being selected.
        </i>
      </h4>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
