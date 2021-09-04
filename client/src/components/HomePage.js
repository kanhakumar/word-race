import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-div">
          <span className="header-text">Welcome</span>
          <span className="header-text">to</span>
          <span className="header-text">WordRace!</span>
        </div>
      </div>
      <div className="bottom-container">
        <div className="description-div">
          <p>
            Word Race is a game designed to improve QWERTY typing rate and
            efficiency. Words appear one by one at a rate that goes up as time
            progresses. There’s a limited “stack space” that fills up after a
            certain amount of words have appeared. Once a player types a word
            correctly, that word is removed from the stack.{" "}
          </p>
          <p>
            The score is calculated based on how fast the player was able to
            clear that word, and a multiplier. The multiplier increases with
            every word the player types correctly and resets on any mistype.
            Optionally a leveling system can also be added that varies the word
            appearing rate, the stack space and leveling up bonus score, else
            the rate can go up constantly, flattening out at say one word per
            two seconds.
          </p>
          <p>
            If the stack is full, it’s game over. The player can then submit
            their score and compare with a leaderboard.
          </p>
        </div>
        <div className="button-div">
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "auto" }}
          >
            Lets's go!
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
