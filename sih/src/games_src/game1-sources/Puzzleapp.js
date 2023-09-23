// src/App.js
import React from "react";
import "./App.css"; // You can create this CSS file for global styling if needed
import Puzzle from "./Puzzle";

function PuzzleApp({ setstart, setx, setinfo, info, setcount, start }) {
  return (
    <>
      <h1 style={{ color: "black" }}> Puzzle Game</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Puzzle
          setinfo={setinfo}
          info={info}
          setcount={setcount}
          start={start}
        />
      </div>
    </>
  );
}

export default PuzzleApp;
