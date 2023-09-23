import { useState } from "react";
import "./Question.css";
import option1 from "./option1.jpg";
import option2 from "./option2.jpg";
import audioFile1 from "./dumbo.mp3";
const questions = [
  {
    question:
      "There is a river behind the baby elephant's school.What should the baby elephant do??",
    response: 1,
    answerimage: "riimage002",
  },
];
// const audioFile1 = "./dumbo.wav";
// const audioFile2 = "/I really want to 7.wav";
// const audioFile3 = "/OH Look at that 1.wav";
export default function Questionaire({ setstart }) {
  const [ans, selectans] = useState(-1);
  const [select, press] = useState(0);
  function AudioPlayer1() {
    return (
      <div>
        <audio controls autoPlay>
          <source src={audioFile1} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
  //   function AudioPlayer3() {
  //     return (
  //       <div>
  //         <audio controls autoPlay>
  //           <source src={audioFile3} type="audio/wav" />
  //           Your browser does not support the audio element.
  //         </audio>
  //       </div>
  //     );
  //   }
  //   function AudioPlayer2() {
  //     return (
  //       <div>
  //         <audio controls autoPlay>
  //           <source src={audioFile2} type="audio/wav" />
  //           Your browser does not support the audio element.
  //         </audio>
  //       </div>
  //     );
  //   }
  return (
    <div>
      <h2 style={{ color: "black" }}>
        Answer the following question by clicking on the appropriate image.
      </h2>
      <div className="riitem">
        <h3> {questions[0].question}</h3>
        <AudioPlayer1 />
      </div>
      <table className="table riactivity" style={{ width: "100%" }}>
        <tr>
          <td
            className="td1"
            onClick={() => {
              selectans(0);
              press(1);
            }}
          >
            <div
              style={{
                background: `url(${option1})`,
                height: "420px",
                width: "700px",
              }}
            >
              <h3 style={{ paddingTop: "320px", color: "black" }}>
                I will jump in the river
              </h3>
            </div>
          </td>
          <td
            className="td2"
            onClick={() => {
              selectans(1);
              press(1);
            }}
          >
            <div
              style={{
                background: `url(${option2})`,
                height: "420px",
                width: "700px",
              }}
            >
              <h3 style={{ paddingTop: "320px", color: "black" }}>
                I will stay on the sea shore
              </h3>
            </div>
          </td>
        </tr>
      </table>
      {console.log(select === 1 && ans === questions[0].response)}
      {select === 1 && ans === questions[0].response && (
        <div className="ricorrect">Yor answer is correct</div>
      )}
      {select === 1 && ans !== questions[0].response && (
        <div className="riincorrect">
          Your answer is wrong. Please select the correct answer.
        </div>
      )}
      {select === 1 && ans === questions[0].response && (
        <button className="ctax" onClick={() => setstart("finish")}>
          Continue
        </button>
      )}
    </div>
  );
}
