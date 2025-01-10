// This is how we can import components or modules and use them in our code
import Chai from "./chai"

// this App function is called a react component
// the first alphabet should be uppercase
function App() {
  // in jsx we can initialize our variables and for injecting we have to use a curly brace {}
  const username = "chai aur code"
  return (
    <>
    <Chai/>
    {/* here the {username will be called "evaluated expression" means here the value will be injected during the reactdom creation phase} */}
    <h1>chai aur react {username}</h1>
    <p>test para</p>
   </>
  )
}

// this way we can export our react component so that in other files we can import it and use it like for rendering purpose
export default App