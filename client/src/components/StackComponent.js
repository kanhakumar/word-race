import { useEffect } from "react";

const StackComponent = (props) => {
  useEffect(() => {
    if (props.stackedWords.length === 7) {
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
