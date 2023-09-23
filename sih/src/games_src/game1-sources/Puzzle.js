import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tile from "./Tile";
import "./index.css";
const Puzzle = ({ setinfo, info, setcount, start }) => {
  const [tiles, setTiles] = useState([]);
  const [selectedTileIndex, setSelectedTileIndex] = useState(null);
  const [isSolved, setIsSolved] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [tries, setTries] = useState(0);
  const [y, setx] = useState(Math.floor(Math.random() * 5) + 1);
  const x = Math.random();
  console.log(x);
  console.log(x * 5);
  console.log(Math.floor(x * 5));
  const nav = useNavigate();

  useEffect(() => {
    const images = [...Array(9).keys()].map(
      (i) => `images${y}/image${i + 1}.jpg`
    );
    const shuffledImages = shuffle(images);
    setTiles(shuffledImages);
  }, []);

  useEffect(() => {
    if (isSolved) {
      const currentEndTime = new Date();
      setEndTime(currentEndTime);
      // Log the end time
    }
  }, [isSolved]);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex,
      tempValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }

    return array;
  };

  const checkIsSolved = (currentTiles) => {
    return currentTiles.every(
      (tile, index) => tile === `images${y}/image${index + 1}.jpg`
    );
  };

  // const formatTime = (time) => {
  //   if (!time) return "";
  //   const hours = time.getHours().toString().padStart(2, "0");
  //   const minutes = time.getMinutes().toString().padStart(2, "0");
  //   const seconds = time.getSeconds().toString().padStart(2, "0");
  //   return `${hours}:${minutes}:${seconds}`;
  // };

  const calculateTimeDifference = () => {
    if (startTime && endTime) {
      const timeDifference = endTime - startTime; // in milliseconds
      //   const hours = Math.floor(
      //     (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      //   );
      //   const minutes = Math.floor(
      //     (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      //   );
      //   const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      //   return `${hours}:${minutes}:${seconds}`;
      // }
      return Math.round((timeDifference / (1000 * 60)) * 100) / 100;
    }
  };

  const handleTileClick = (clickedIndex) => {
    if (isSolved) {
      return;
    }

    if (selectedTileIndex === null) {
      setSelectedTileIndex(clickedIndex);
      if (!startTime) {
        const currentStartTime = new Date();
        setStartTime(currentStartTime);
        // Log the start time
      }
    } else {
      const updatedTiles = [...tiles];
      [updatedTiles[selectedTileIndex], updatedTiles[clickedIndex]] = [
        updatedTiles[clickedIndex],
        updatedTiles[selectedTileIndex],
      ];

      setSelectedTileIndex(null);

      setTiles(updatedTiles);
      setTries((prevTries) => {
        const newTries = prevTries + 1;
        // Log the number of tries
        return newTries;
      });

      const solved = checkIsSolved(updatedTiles);
      if (solved) {
        setIsSolved(true);
      }
    }
  };

  const resetPuzzle = () => {
    const images = [...Array(9).keys()].map(
      (i) => `images${y}/image${i + 1}.jpg`
    );
    const shuffledImages = shuffle(images);
    setTiles(shuffledImages);
    setIsSolved(false);
    setTries(0);
    setStartTime(null);
    setEndTime(null);
    if (start === "stop") {
      setcount(0);
      const x = calculateTimeDifference();
      setinfo([...info, tries, x]);
    }
    if (start === "finish") nav(-1);
  };

  const grid = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const index = row * 3 + col;
      grid.push(
        <Tile
          key={index}
          image={tiles[index]}
          onClick={() => handleTileClick(index)}
          isSelected={selectedTileIndex === index}
          // tileSize="100px"
        />
      );
    }
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "4px", // Reduce the gap between columns
    // Reduce the overall width of the grid to half size
    // Center the grid horizontally
  };

  return (
    <div className="puzzle-container">
      {isSolved ? (
        <div>
          <h1 style={{ color: "black" }}>
            Congratulations! You've solved the puzzle.
          </h1>
          <h2 style={{ color: "black" }}>Tries: {tries}</h2>
          <h2 style={{ color: "black" }}>Time: {calculateTimeDifference()}</h2>
          <button className="ctax" onClick={resetPuzzle}>
            Go back
          </button>
        </div>
      ) : (
        <div>
          <div className="puzzle" style={gridStyle}>
            {grid}
          </div>
        </div>
      )}
    </div>
  );
};

export default Puzzle;
