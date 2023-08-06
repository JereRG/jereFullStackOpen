import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ functionClick, text }) => (
  <button onClick={functionClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]

  const [select, setSelect] = useState(0);

  const [point, setPoint] = useState(new Array(anecdotes.length).fill(0));

  const addVote = () => {
      const pointCopy = [...point];
      pointCopy[select] += 1;
      setPoint(pointCopy);
  };

  const bestAnecdote = point.indexOf(Math.max(...point));

  return (
      <div>
          <h1>Anecdote of the day</h1>
          <div>{anecdotes[select]}</div>
          <div>has {point[select]} points</div>
          <Button functionClick={() => addVote()} text="vote" />
          <Button
              functionClick={() =>
                  setSelect(Math.floor(Math.random() * anecdotes.length))
              }
              text="next anecdote"
          />
          <h1>Anecdote with most votes</h1>
          <div>{anecdotes[bestAnecdote]}</div>
          <div>has {point[bestAnecdote]} votes</div>
      </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
)