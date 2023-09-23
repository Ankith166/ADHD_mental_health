import { useEffect } from "react";

function Timer({ time, setx, setstart, setcount, setpc, pcount }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        if (time > 0) setx(time - 1);
        if (time <= 0) {
          setstart("stop");
          setcount(0);
          setpc((x) => {
            if (x === -1) return (x = 0);
            else return x;
          });
        }
      }, 1000);

      return () => {
        clearInterval(id);
      };
    },
    [time, setstart, setx, setcount]
  );
  return (
    <div style={{ paddingTop: "60px" }}>
      {time <= 10 && time >= 7 && pcount === -1 && (
        <h1>Hello i am a panda!!!</h1>
      )}
      {time <= 6 && time > 3 && pcount === -1 && (
        <h1>Today we will be exploring the world!!!</h1>
      )}
      {time <= 3 && time >= 0 && pcount === -1 && (
        <h1>Before that let us play a quick game !!!</h1>
      )}

      {time <= 10 && time >= 7 && pcount === 1 && <h1>HELLOOO!!!</h1>}
      {time <= 6 && time > 3 && pcount === 1 && (
        <h1>I have a friend called sheep!!!</h1>
      )}
      {time <= 3 && time >= 0 && pcount === 1 && (
        <h1>Lets see what she is doing !!!</h1>
      )}
    </div>
  );
}
export default Timer;
