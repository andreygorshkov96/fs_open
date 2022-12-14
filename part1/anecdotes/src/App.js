import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Max = (props) => {
  return props.anecdotes[props.points.indexOf(Math.max(...props.points))];
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const handleVote = () => {
    const newPoints = [...points];
    newPoints[selected]++;
    return setPoints(newPoints);
  };

  return (
    <div>
      <h1> Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {points[selected]}</p>
      <div>
        <Button text="Vote" handleClick={() => handleVote()} />

        <Button
          text="Next Anecdote"
          handleClick={() => setSelected(getRandomInt(anecdotes.length))}
        />
      </div>
      <h1>Anecdote with most points</h1>
      <div>
        <Max anecdotes={anecdotes} points={points} />
      </div>
    </div>
  );
};

export default App;
