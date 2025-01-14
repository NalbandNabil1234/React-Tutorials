import { useState } from 'react'

function App() {
  // let counter = 5

  // the value is updated successfully but no propagated at the ui so we are using useState hook here
  // use state hook is react hook which is responsible of propagating updates in ui, it manages the state and you dont need to write document.querySelector and all and inject it instead it automatially propagate the update in every element where the propagation is needed
  // syntax:
  // let [counter, setCounter] = useState(0) // here the counter is a normal variable which we declare normally and setCounter is nothing but a method or a function which will be responsible of updating and propagating changes in ui and the useState is a hook and the 0 is the initial value of the counter variable 

  let [counter, setCounter] = useState(0)
  let increaseVal = () => {
    // counter++
    // console.log(counter)
    setCounter(counter + 1)
  }

  let decreaseVal = () => {
    // counter--
    // console.log(counter)
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>Number Counter</h1>
    <h3>The Number is : {counter}</h3>
    {/* but the issue is it is not propagated to ui so the solution is to use use state hook */}
    <button onClick={increaseVal}>Increase Value {counter}</button>
    <br /><br />
    <button onClick={decreaseVal}>Decrease Value {counter}</button>
    </>
  )
}

export default App
