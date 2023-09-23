import { useState } from "react";
import "./Gameapp.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
function Gameinterface({
  setcount,
  setstart,
  info,
  setcdata,

  setpc,
  setx,
  data,
  username,
}) {
  const [change1, handlechange1] = useState(false);
  const [change2, handlechange2] = useState(false);
  function merge() {
    const ar = [username, ...data, ...info];
    console.log(ar);
    return ar;
  }

  const convertObjToDesiredStructure = (inputArray) => {
    const obj1 = {
      Username: inputArray[0],
      "Attentive Score": inputArray[2],
      "Hyperactivity Score": inputArray[3],
      "ADHD of blood relative?": inputArray[1],
      tries: 15,
      time: 3.5,
    };
    // Calculate average of odd indexed elements (time)
    let oddTimeSum = 0;
    let oddTimeCount = 0;

    // Calculate average of even indexed elements (tries)
    let evenTriesSum = 0;
    let evenTriesCount = 0;
    for (let i = 4; i < inputArray.length; i++) {
      if (i % 2 === 0) {
        evenTriesSum += inputArray[i];
        evenTriesCount++;
      } else {
        oddTimeSum += inputArray[i];
        oddTimeCount++;
      }
    }
    if (evenTriesCount > 0) {
      obj1["tries"] = evenTriesSum / evenTriesCount;
    }
    if (oddTimeCount > 0) {
      obj1["time"] = oddTimeSum / oddTimeCount;
    }

    console.log(obj1);
    return obj1;
  };
  const sendObjToServer = () => {
    const obj = merge();
    const obj1 = convertObjToDesiredStructure(obj);

    axios
      .post("http://localhost:5000/send_obj_to_server", obj1)
      .then((response) => {
        // Handle the response from the server, if needed
        console.log("React prediction received is: ", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // const nav = useNavigate();

  return (
    <>
      <div className="interface">
        (
        <div
          className={`sidebar ${change1 && `select`}`}
          onClick={() => {
            setcount(1);
          }}
          onMouseOver={() => handlechange1(true)}
          onMouseLeave={() => handlechange1(false)}
        >
          <div className="par">
            <h1>Game 1</h1>
            <h3>
              Rearrange the pieces to form an approriate figure.
              <br />
              Try to use minimum number of steps and be fast!!
              <br />
            </h3>
          </div>
        </div>
        ) (
        <div
          className={`side ${change2 && `select`}`}
          onClick={() => {
            setcount(2);
          }}
          onMouseOver={() => handlechange2(true)}
          onMouseLeave={() => handlechange2(false)}
        >
          <div className="par">
            <h1>Game 2</h1>
            <h3>
              Try to remember the cards which u picked to match the other ones
              <br />
              Focus on the game!!
              <br />
            </h3>
          </div>
        </div>
        )
      </div>
      <button
        style={{ marginTop: "30px" }}
        className="ctax"
        onClick={() => {
          setcdata([...info]);
          sendObjToServer();
          setpc(1);
          setstart("ready");
          setx(10);
        }}
      >
        Go back
      </button>
    </>
  );
}
export default Gameinterface;
