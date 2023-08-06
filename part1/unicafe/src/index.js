import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({functionClick,text}) => (
  <button style={{margin:'10px', borderRadius: '5px'}} onClick={functionClick}>{text}</button>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all > 0 ? roundTwoDecimals((good - bad) / all) : 0;
  const positive = all > 0 ? roundTwoDecimals((good / all) * 100) : 0;

  if (all === 0) {
      return <div>No Feedback Given</div>;
  }

  return (
      <table>
          <tbody>
              <StatisticsLine text="Good" value={good} />
              <StatisticsLine text="Neutral" value={neutral} />
              <StatisticsLine text="Bad" value={bad} />
              <StatisticsLine text="All" value={all} />
              <StatisticsLine text="Average" value={average} />
              <StatisticsLine text="Positive" value={positive + " %"} />
          </tbody>
      </table>
  );
};

const StatisticsLine = ({ text, value }) => (
  <tr>
      <td>{text}</td>
      <td>{value}</td>
  </tr>
);

//Function created to round two decimal places
const roundTwoDecimals = (num) => Math.round(num * 100) / 100;


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button functionClick={()=> setGood(good + 1)} text="Good" />
      <Button functionClick={()=> setNeutral(neutral + 1)} text="Neutral" />
      <Button functionClick={()=> setBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)