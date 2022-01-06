import React, { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )

}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const sumOfClicks = props.good + props.neutral + props.bad
  if (sumOfClicks === 0) {
    return (
      <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticLine value={props.good} text={"good"} />
        <StatisticLine value={props.neutral} text={"neutral"} />
        <StatisticLine value={props.bad} text={"bad"} />
        <StatisticLine value={sumOfClicks} text={"all"} />
        <StatisticLine value={props.allClicks/(sumOfClicks)} text={"average"} />
        <StatisticLine value={props.good/(sumOfClicks)*100 +"%"} text={"positive"} />
      </table>
      
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setKeskiarvo] = useState(0)
 
  const handleGoodClick = () => {
  setKeskiarvo(allClicks + 1)
  setGood(good + 1)
  }
 
  const handleNeutralClick = () => {
    setKeskiarvo(allClicks + 0)
    setNeutral(neutral + 1)
  }
 
  const handleBadClick = () => {
      setKeskiarvo(allClicks - 1)
      setBad(bad + 1)
  }
  
  return (
    <div>
      <h1> Give feedback!</h1>
      <Button handleClick={handleGoodClick} text={"good"} />
      <Button handleClick={handleNeutralClick} text={"neutral"} />
      <Button handleClick={handleBadClick} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}

export default App