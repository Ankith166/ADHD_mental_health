import { useState } from "react";
import Start from "./Start";

// import { motion } from "framer-motion";
//import Gamestart from "./Gamestart";
import Timer from "./Timer";
import PuzzleApp from "./game1-sources/Puzzleapp";
import Memoryapp from "./game2-sources/Memoryapp";

import Gameinterface from "./Gameinterface";
import VideoPlayer from "./Videoplayer";
// import ReactPlayer from "react-player";
import Questionaire from "./Questionaire";
import QVideo from "./Qvideo";
import Ready from "./Ready";
import Congrats from "./Congrats";
import Exitbutton from "./Exitbutton";
function Gamesapp({ setcdata, data, username, setdata }) {
  const [start, setstart] = useState("loading");
  const [x, setx] = useState(10);
  const [pc, setpc] = useState(-1);
  const [info, setinfo] = useState([]);
  const [count, setcount] = useState(0);

  const [r, setr] = useState(0);
  function handleend() {
    // setcount(0);
    setstart("int");
  }
  function handlqeend() {
    setstart("ans");
  }
  // function ExampleComponent() {
  //   return (
  //     <TypeAnimation
  //       sequence={[
  //         // Same substring at the start will only be typed out once, initially
  //         "hello i am a panda",
  //         1000, // wait 1s before replacing "Mice" with "Hamsters"
  //         "today we will be exploring the world",
  //         1000,
  //         "let us play a quick game to demonstrate ur abilities",
  //         1000,
  //         "less goo",
  //         1000,
  //       ]}
  //       wrapper="span"
  //       speed={100}
  //       style={{ fontSize: "2em", display: "inline-block" }}
  //     />
  //   );
  // }

  return (
    <>
      {start === "loading" && <Start setstart={setstart} data={data} />}
      {start === "int" && <Ready setstart={setstart} />}
      {start === "qstn" && <QVideo handlqeend={handlqeend} />}
      {start === "ans" && <Questionaire setstart={setstart} />}

      {start === "finish" && r === 0 && (
        <>
          <Congrats setr={setr} />
        </>
      )}
      {start === "finish" && r === 1 && (
        <PuzzleApp
          setstart={setstart}
          start={start}
          setx={setx}
          setinfo={setinfo}
          info={info}
          setcount={setcount}
        />
      )}
      {start === "ready" && pc === -1 && (
        <>
          <div className="big">
            <Timer
              time={x}
              setx={setx}
              setstart={setstart}
              setcount={setcount}
              setpc={setpc}
              pcount={pc}
            />
            {/* <ExampleComponent /> */}
            <div
              className="div_run"
              style={{
                animation:
                  " walk 4s steps(12) infinite, forward 9s linear infinite",
              }}
            ></div>
            {/* <ReactPlayer
              url="https://www.youtube.com/watch?v=7LNl2JlZKHA"
              controls={true}
            /> */}
            {/* <VideoPlayer handleend={handleend} /> */}
          </div>
        </>
      )}
      {start === "ready" && pc === 1 && (
        <>
          <div className="big">
            <Timer
              time={x}
              setx={setx}
              setstart={setstart}
              setcount={setcount}
              setpc={setpc}
              pcount={pc}
            />

            <Exitbutton setcdata={setcdata} setdata={setdata} />

            <div
              className="div_run"
              style={{
                animation:
                  " walk 4s steps(12) infinite, forward 6s linear infinite",
              }}
            ></div>
            {/* <ReactPlayer
              url="https://www.youtube.com/watch?v=7LNl2JlZKHA"
              controls={true}
            /> */}
            {/* <VideoPlayer handleend={handleend} /> */}
          </div>
        </>
      )}
      {start === "stop" && pc === 1 && <VideoPlayer handleend={handleend} />}
      {start === "stop" && count === 1 && pc === 0 && (
        <PuzzleApp
          setstart={setstart}
          setx={setx}
          setinfo={setinfo}
          info={info}
          setcount={setcount}
          start={start}
        />
      )}
      {start === "stop" && count === 2 && pc === 0 && (
        <Memoryapp info={info} setinfo={setinfo} setcount={setcount} />
      )}
      {start === "stop" && count === 0 && pc === 0 && (
        <Gameinterface
          setcount={setcount}
          setstart={setstart}
          info={info}
          setcdata={setcdata}
          setpc={setpc}
          setx={setx}
          data={data}
          username={username}
        />
      )}
    </>
  );
}

export default Gamesapp;
