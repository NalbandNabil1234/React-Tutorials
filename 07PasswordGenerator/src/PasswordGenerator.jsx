import { useState, useCallback, useEffect, useRef } from 'react'

function PasswordGenerator() {

    const [length, setLength] = useState(8)
    let [numbersAllowed, setNumbersAllowed] = useState(false)
    let [speacialCharAllowed, setSpecialCharAllowed] = useState(false)
    const [password, setPassword] = useState('')
    
    //use ref hook
    const copyPassToClipboard = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ''
        let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        
        if(numbersAllowed){
            char += '1234567890'
        }

        if(speacialCharAllowed){
            char += '!#$%&()*+,-./:;<=>?@[\]^_{|}~'
        }

        for(let i=1; i<=length; i++){
            let charIndex = Math.floor(Math.random()*char.length + 1);
            pass += char.charAt(charIndex)
        }

        setPassword(pass)
    }, [length, numbersAllowed, speacialCharAllowed, setPassword]) 

    useEffect(() => {
        passwordGenerator()
    }, [length, numbersAllowed, speacialCharAllowed, setPassword, passwordGenerator])
    
    const copyPass = () => {
        copyPassToClipboard.current?.select()
        // copyPassToClipboard.current?.setSelectionRange(0, 8)
        window.navigator.clipboard.writeText(password)
    }
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text"
            value={password}
            readOnly
            placeholder='Password'
            className='outline-none w-full py-1 px-3'
            ref={copyPassToClipboard} />
            <button 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPass}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input 
                type="range" 
                min={8}
                max={50}
                value={length}
                id="range"
                onChange={(e) => {
                    setLength(e.target.value)
                    console.log(e)
                }} />
                <label htmlFor="range">Length : {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input 
                type="checkbox" 
                checked={numbersAllowed}
                id="numberallowed" 
                onChange={() => {
                    setNumbersAllowed((prev) => !prev)
                }}/>
                <label htmlFor="numberallowed">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input 
                type="checkbox" 
                checked={speacialCharAllowed}
                onChange={() => {
                    setSpecialCharAllowed((prev) => !prev)
                }}
                id="specialcharallowed" />
                <label htmlFor="specialcharallowed">Special Characters</label>
            </div>
        </div>
    </div>
  )
}

export default PasswordGenerator