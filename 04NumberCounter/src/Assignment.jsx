import {useState} from 'react';

function Assignment(){
    let [counter, setCounter] = useState(0)
    let [msg, setMsg] = useState('')
    let increaseNumber = () => {
        if(counter < 20){
            setCounter(counter + 1)
            setMsg('')
        } else{
            setMsg('Number cant be > 20')
        }
    }
    let decreaseNumber = () => {
        if(counter > 0){
            setCounter(counter - 1)
            setMsg('')
        } else{
            setMsg('Number cant be < 0')
        }
    }
    return(
        <>
        <h1>Assignment</h1>
        <h3>Updated Number Counter</h3>
        <h3>The Number is : {counter}</h3>
        <h4>Constraints: Number cant be less than 0 and more than 20</h4>
        <button onClick={increaseNumber}>Increase Value</button>
        <br /><br />
        <button onClick={decreaseNumber}>Decrease Value</button>
        <p>{msg}</p>
        </>
    )
}
export default Assignment