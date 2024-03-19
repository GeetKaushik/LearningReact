import { useState } from 'react'
import './App.css'

function App() {
  var [counter, setCounter] = useState(0)

  const Add = () => {
    counter = counter + 1
    if (counter > 20) {
      counter = 20
      alert("Reached Max(20)")
    } else {
      setCounter(counter)
    }
  }
  const Remove = () => {
    counter = counter - 1
    if (counter < 0) {
      counter = 0
      alert("Reached Min(0)")
    } else { 
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Basic Counter</h1>
      <h2>{counter}</h2>
      <button onClick={Remove} className='m-2'>-</button>
      <button onClick={Add} className='m-2'>+</button>

    </>
  )
}

export default App
