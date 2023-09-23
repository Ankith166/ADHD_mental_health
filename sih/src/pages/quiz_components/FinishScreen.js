import { useNavigate } from "react-router-dom";
import { useQuiz } from "../contexts/QuizContext";

function FinishScreen({ data, setdata }) {
  const { answerarray } = useQuiz();
  const nav = useNavigate();
  const a = answerarray[0];
  let b = 0;
  let c = 0;
  //1,2-10,11-19
  return (
    <>
      <h4>Thank you !!! Please go back to the main menu.</h4>
      {answerarray.map((answer, ind) => {
        if (ind >= 1 && ind <= 9) {
          b += answer;
        }

        if (ind >= 10 && ind <= 18) {
          c += answer;
        }

        return null; // You should return something in the map function
      })}
      {/* <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button> */}
      <button
        className="btn btn-ui"
        onClick={() => {
          setdata([...data, a, b, c]);
          nav(-1);
        }}
      >
        Go BACK
      </button>
    </>
  );
}

export default FinishScreen;
