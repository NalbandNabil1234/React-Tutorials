import React, { useState } from 'react'

function ReactInterviewQues(){
    const [Counter, setCounter] = useState(0)
    function addVal(){
        // here the same code is getting executed multiple times like same counter 0 is increamenting from 0 to 1 again and again this is  because the fibre algo smartness what it does is it will see that they are same working for update counter from 0 to 1 so it will bundles them and then will send it as a same task
        // setCounter(Counter+1)
        // setCounter(Counter+1)
        // setCounter(Counter+1)
        // setCounter(Counter+1)

        // but wht if you want to do it multiple times so the solution is use the callback feature enabled inside the setCounter function and use the prevCounter value so that it will work similar like .then and .then will have value of prev .then kind of
        console.log('Hi')
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        }
    
        return(
        <>
        <h1>React Interview Question</h1>
        <h1>The Number is : {Counter}</h1>
        <button onClick={addVal}>Add</button>
        </> 
    )
}


export default ReactInterviewQues