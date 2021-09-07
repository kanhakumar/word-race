import { useEffect } from "react";

const StackComponent = (props) => {
  useEffect(() => {
    console.log(props.stackedWords.length);
    if (props.stackedWords.length === 7) {
      console.log("bhejega?");
      props.endGame();
    }
  }, [props.stackedWords]);
  return (
    <div className="stack-container">
      {props.stackedWords.map((word) => {
        return (
          <div className="word-container">
            <p className="words">{word.word}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StackComponent;
