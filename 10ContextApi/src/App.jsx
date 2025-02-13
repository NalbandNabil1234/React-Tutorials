import React from "react"
import Login from './Components/Login.jsx'
import Profile from "./Components/Profile.jsx"
import UserContextProvider from "./ContextApi/UserContextProvider.jsx"
function App() {
  return (
    <UserContextProvider>    
        <Login />
        {/* <Profile /> */}
    </UserContextProvider>
  )
}

export default App
