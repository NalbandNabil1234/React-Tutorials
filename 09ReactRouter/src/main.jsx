import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import About from './Components/About/About'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github, { GithubInfoLoader } from './Components/Github/Github'

// first way of creating a route
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children:[
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/About',
//         element: <About />
//       },
//       {
//         path: '/Contact',
//         element: <Contact />
//       },
//       {
//         path: '/user/:userid',
//         element: <User />
//       }
//     ]
//   }
// ])

// second and easy way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route 
      loader={GithubInfoLoader}
      path='github' 
      element={<Github />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
