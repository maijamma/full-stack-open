import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Person = (props) => {
  const { person } = props
  return (
    <p>
      {person.name} {person.number}
    </p>
  )
}

const Numbers = (props) => {
  const { persons } = props
  return (
    <div>
      {persons.map(person =>
      <div key={person.name}>
        <Person person={person} />
      </div>
      )}
    </div>
  )
}

const Filter = (props) => {
  return (
    <div>
      filter shown with <input value={props.text} onChange={props.handleChange} />
    </div>
  )
}


const App = () => {

  
  const [persons, setPersons] = useState([
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber
    }

    persons.some(person => person.name === newName) 
    ?  alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat(personObject))
    
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const personsToShow = newFilter 
  ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())) 
  : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text={newFilter} handleChange={handleFilterChange} />
      
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} 
                onChange={handleNameChange}
                />
        </div>
        <div>
          number: <input value={newNumber} 
                onChange={handleNumberChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={personsToShow} />
    </div>
  )

}

export default App