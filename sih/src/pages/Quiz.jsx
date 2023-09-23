import App from "./quiz_components/App";
import { QuizProvider } from "./contexts/QuizContext";

import "./index_quiz.css";

function Quiz({ data, setdata, username }) {
  return (
    <div className="quiz">
      <QuizProvider>
        <App data={data} setdata={setdata} username={username} />
      </QuizProvider>
    </div>
  );
}
export default Quiz;
