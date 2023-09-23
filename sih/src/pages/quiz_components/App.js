import Header from "./Header";
import Main from "./Main";

import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";

import { useQuiz } from "../contexts/QuizContext";

export default function App({ data, setdata, username }) {
  const { status } = useQuiz();

  return (
    <div className="appquiz">
      <Header username={username} />

      <Main>
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen data={data} setdata={setdata} />
        )}
      </Main>
    </div>
  );
}
