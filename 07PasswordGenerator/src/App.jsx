import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed){
      char += '12345678910'
    }

    if(specialCharAllowed){
      char += '!#$%&()*+,-./:;<=>?@[\]^_{|}~'
    }

    for(let i=1; i<=length; i++){
      let generateCharIndex = Math.floor(Math.random() * char.length + 1)
      pass += char.charAt(generateCharIndex)
    }
    setPassword(pass)
  }, [length, numberAllowed, specialCharAllowed, setPassword])
 
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, specialCharAllowed, passwordGenerator])

  return (
    <div className='flex flex-col justify-center items-center text-white m-10'>
      <h1 className='text-center  text-4xl'>Password Generator</h1>

      <div className='w-6/12 h-32 bg-gray-700 rounded-3xl mt-5 flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
          <input
            type="text"
            className='outline-none text-center w-full max-w-full px-4 py-1.5 rounded-l-xl text-red-400'
            value={password}
            placeholder='Password'
            readOnly
          />
          <button 
          className='bg-blue-700 px-4 py-1.5 rounded-r-xl'
          onClick={() => {
            window.navigator.clipboard.writeText(password)
          }}>Copy</button>
        </div>
        <div className='flex justify-center items-center mt-3'>
          <input
            className="mx-2"
            type="range"
            min={8}
            max={20}
            value={length}
            id="length"
            onChange={(e) => {setLength(e.target.value)}} />
          <label htmlFor="length">Length : {length}</label>

          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          id="numbers" 
          className='mx-2'
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}/>
          <label htmlFor="numbers">Numbers</label>

          <input type="checkbox" 
          defaultChecked={specialCharAllowed}
          id="specialChar" 
          className='mx-2'
          onChange={() => {
            setSpecialCharAllowed((prev) => !prev)
          }}/>
          <label htmlFor="specialChar">Special Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
