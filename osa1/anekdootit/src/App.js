import React, { useState } from 'react'

const RandomIndex = (max) => Math.floor(Math.random() * max)

const IndexOfMax = (points) => {
  const max = Math.max(...points)
  const index = points.indexOf(max)
  return index
}

const ShowAnecdote = (props) => {
  return (
    <div>
      <p>{props.anecdote}</p>
    </div>

  )
}

const ShowVotes = (props) => {
  return (
    <div>
      <p>has {props.points} votes</p>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(RandomIndex(anecdotes.length))
  const [points, setVotes] = useState(new Uint8Array(anecdotes.length))

  const handleNextClick = () => {
    setSelected(RandomIndex(anecdotes.length))
  }
  
  const handleVoteClick =() => {
    const copy = [...points]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <ShowAnecdote anecdote={anecdotes[selected]} />
      <ShowVotes points={points[selected]} />
      <Button handleClick={handleVoteClick} text={"vote"} />
      <Button handleClick={handleNextClick}  text={"next anecdote"} />
      <h1>Anecdote with most votes</h1>
      <ShowAnecdote anecdote={anecdotes[IndexOfMax(points)]} />
      <ShowVotes points={points[IndexOfMax(points)]} />
    </div>
  )
}

export default App