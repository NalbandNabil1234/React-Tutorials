import Hello from './chai'
function App() {
  
  return (
    // the issue is we can return any one element so the solution is using div or  <> </> empty we called it as fragment in react
    <>
    {/* <div> */}
    <h1>Hello World!</h1>
    <Hello />
    {/* </div> */}
    </>
  )
}

export default App
