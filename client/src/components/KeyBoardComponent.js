import { useEffect } from "react";

const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const midRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const endRow = ["Z", "X", "C", "V", "B", "N", "M"];

const KeyBoardComponent = () => {
  const handleKeyDown = (e) => {
    let obj = document.getElementById(e.key.toUpperCase());
    if (obj) {
      obj.style.backgroundColor = "#63a0ef";
      obj.style.color = "white";
    }
  };
  const handleKeyUp = (e) => {
    let obj = document.getElementById(e.key.toUpperCase());
    if (obj) {
      obj.style.backgroundColor = "#ddd";
      obj.style.color = "black";
    }
  };
  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    document.body.addEventListener("keyup", handleKeyUp);
  }, []);
  return (
    <div>
      <div className="letter-container">
        {topRow.map((alpha) => {
          return (
            <div className="letter-box" id={alpha}>
              <p>{alpha}</p>
            </div>
          );
        })}
      </div>
      <div className="letter-container">
        {midRow.map((alpha) => {
          return (
            <div className="letter-box" id={alpha}>
              <p>{alpha}</p>
            </div>
          );
        })}
      </div>
      <div className="letter-container">
        {endRow.map((alpha) => {
          return (
            <div className="letter-box" id={alpha}>
              <p>{alpha}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyBoardComponent;
