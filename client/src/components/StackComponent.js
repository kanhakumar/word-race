const words = ["KANHA", "RAJ", "AYUSH", "NIRMAL", "KIRAN", "PADMA"];

const StackComponent = () => {
  return (
    <div>
      {words.map((word) => {
        return (
          <div>
            <p>{word}</p>
          </div>
        );
      })}
      {/* {words.map((word, index) => {
        setTimeout(() => {
          return (
            <div>
              <p>{word}</p>
            </div>
          );
          //   console.log(word);
        }, 1000 * index);
      })} */}
    </div>
  );
};

export default StackComponent;
