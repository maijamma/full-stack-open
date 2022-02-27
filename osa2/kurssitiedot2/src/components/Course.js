import React from 'react'

const Header = (props) => {
    return (
    <div>
        <h1>{props.name}</h1>
    </div>
    )
}    
    
const Content = (props) => {
    const { parts } = props
    return (
    <div>
        {parts.map(part =>
        <p key={part.id}>
            {part.name} {part.exercises}
        </p>
        )}
    </div>
    )
}

const Course = (props) =>{
    const { y } = props

    const total = y.parts.reduce( (s, p) =>  s + p.exercises, 0)
    return (
        <div>
        <Header name={y.name} />
        <Content parts={y.parts} />
        <p><b>total of {total} exercises</b></p>
        </div>
    )
}   
    
export default Course