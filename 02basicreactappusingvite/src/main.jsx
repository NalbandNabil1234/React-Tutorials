import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// tried if we can diectly write the function and can directly give as it is to react to render
function MyApp(){
    return (
        <div>
            <h1>Custom App | Nabil Bhai</h1>
        </div>
    )
}

// tried whether this works or not as to avoid the one step of parsing and all by babel or vite but it wont works, since the concecpt is correct but the react might be using some other syntax of creating element after the jsx parsed by babel 
// const customElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click here to visit google'
// }

// tried this kind of creation and it works beacause the react expect this syntax or direct React.createElement beacuse at last this will also gets parsed as React.createElement by babel and will beacome an js object which can be understood by react
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

// created variable for injecting it
const anotherUser = "chai aur react"

// this is actually done when we create a element in jsx, after that the below is done by babel but here we have written it by ourself to understand

// the process first we create a react compomnent after that it is parsed by the vite or bable like below 
// now the jsx component is parsed to js object which is understandable by react  and finally the react will start creating virtual dom and start parsing the object and after this the react will compare the own dom with the main dom of browser and the the main dom will be updated this process is called "reconcilation" 
// well the above explaination is for the overall process of react
const ReactElement = React.createElement(
    'a',
    // see this is how injecting of the variable is done
    {href: 'https://google.com',target: '_blank' },
    `click me to visit google, ${anotherUser}`,
)
// this is how react actually renders the elements
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    {/* //statndard way is  */}
    <MyApp />
    {/* // ya this works beacuase atlast vite or babel will concert this also in the MyApp() only */}
    {/* // MyApp() */}

    {/* // wont work because the syntax might be wrong but it is conceptually understanding is correct*/}
    {/* {customElement} */}
    
    {anotherElement}

    {/* // this is how elements as an objects can be rendered but is not a good practice */}
    
    {ReactElement}
    </>
)