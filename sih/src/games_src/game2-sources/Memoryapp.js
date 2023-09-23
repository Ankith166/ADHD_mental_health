import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import GameOver from "./components/GameOver";

function Memoryapp({ info, setinfo, setcount }) {
  let arrayOfImages = [
    { id: 1, src: "/img/helmet-1.png", matched: false, num: 1 },
    { id: 2, src: "/img/potion-1.png", matched: false, num: 2 },
    { id: 3, src: "/img/ring-1.png", matched: false, num: 3 },
    { id: 4, src: "/img/scroll-1.png", matched: false, num: 4 },
    { id: 5, src: "/img/shield-1.png", matched: false, num: 5 },
    { id: 6, src: "/img/sword-1.png", matched: false, num: 6 },
  ];
  const [currentDate1, setCurrentDate1] = useState(null);
  const [currentDate2, setCurrentDate2] = useState(null);
  const [timeDifference, setTimeDifference] = useState(null);
  const [obj, setObj] = useState({ t: 0, s: 0, td: 0 });
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  let [score, setScore] = useState(0);
  let [tries, setTries] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const shuffleImages = () => {
    //double array
    let shuffleArray = [...arrayOfImages, ...arrayOfImages]
      //add id
      .map((item, index) => ({ ...item, id: index + 1 }))
      .sort((a, b) => 0.5 - Math.random());
    setScore(0);

    setCards(shuffleArray);
  };
  const updateObj = () => {
    setObj({ t: tries, s: score, td: timeDifference });
  };
  //console.log(cards);
  //EKHANE START HOCCHE
  useEffect(() => {
    const date1 = new Date();
    setCurrentDate1(date1);
    // console.log(date1);
    // console.log(currentDateTimeString2);
    shuffleImages();
  }, []);

  useEffect(() => {
    //console.log(selectedCards)
    if (selectedCards.length === 2) {
      setTimeout(() => {
        setSelectedCards([]);
      }, 1000);
      checkMatch();
    }
  }, [selectedCards]);

  const checkMatch = () => {
    if (selectedCards[0].num === selectedCards[1].num) {
      // console.log("Yayy MATCHED");
      setScore((prev) => prev + 1);

      let updatedCards = cards.map((card) => {
        if (card.num === selectedCards[0].num) {
          return { ...card, matched: true };
        }
        return card;
      });
      setCards(updatedCards);
    } else {
      // console.log("sad lyf");
      setTries((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (timeDifference !== null) {
      updateObj();
    }
  }, [timeDifference]);
  // console.log(cards);

  useEffect(() => {
    if (currentDate1 && currentDate2 && gameOver) {
      // Calculate the time difference in milliseconds

      const timeDifferenceMillis = currentDate2 - currentDate1;
      // console.log("hello diff");

      // Set the time difference in milliseconds to state
      setTimeDifference(timeDifferenceMillis);
      updateObj();
      // console.log(timeDifferenceMillis);
      updateObj();
      setinfo([...info, tries, timeDifferenceMillis / 60000]);
      setcount(0);
    }
  }, [currentDate1, currentDate2, gameOver]);
  //restart game

  var jsonString = JSON.stringify(obj);
  //new code
  // Output the JSON string
  // console.log(jsonString);
  // fetch("http://localhost:3000", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(obj),
  // }).catch((error) => {
  //   console.error("Error:", error);
  // });

  //ALERT!!!!!!!!!!!!!
  //EKHANE SESH HOCCHE
  useEffect(() => {
    // Create a new Date object

    if (score === arrayOfImages.length && !currentDate2) {
      // Get the current date and time as a string
      const date2 = new Date();
      setCurrentDate2(date2);

      // console.log("game over");

      setTimeout(() => {
        shuffleImages();
        setGameOver(true);
      }, 500);
    }
  }, [score, shuffleImages]);
  //FINAL RETURN!
  return (
    <>
      {gameOver && (
        <GameOver setTries={setTries} tries={tries} setGameOver={setGameOver} />
      )}
      <div className="container">
        <div className="score-container">
          <div className="score">Score: {score}</div>
          <div className="tries">Tries: {tries}</div>
        </div>
        <div className="cards-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              setSelectedCards={setSelectedCards}
              selectedCards={selectedCards}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Memoryapp;
