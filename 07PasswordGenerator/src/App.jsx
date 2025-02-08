import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const copyPassToClipboard = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) {
      char += '12345678910'
    }

    if (specialCharAllowed) {
      char += '!#$%&()*+,-./:;<=>?@[\]^_{|}~'
    }

    for (let i = 1; i <= length; i++) {
      let generateCharIndex = Math.floor(Math.random() * char.length + 1)
      pass += char.charAt(generateCharIndex)
    }
    setPassword(pass)
  }, [length, numberAllowed, specialCharAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, specialCharAllowed, passwordGenerator])

  const copyPass = () => {
    copyPassToClipboard.current?.select()
    window.navigator.clipboard.writeText(password)
  }
  return (
    <div className='flex flex-col justify-center items-center text-orange-500 mt-20 mx-5'>
      <h1 className='text-center text-white text-4xl'>Password Generator</h1>

      <div className='w-full sm:w-8/12 md:w-6/12 h-32 bg-gray-800 rounded-3xl mt-5 flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center w-full'>
          <input
            type="text"
            className="outline-none text-center w-9/12 px-4 py-1.5 rounded-l-xl text-black"
            value={password}
            placeholder="Password"
            readOnly
            ref={copyPassToClipboard}
          />
          <button
            className='bg-blue-700 px-4 py-1.5 rounded-r-xl text-white'
            onClick={copyPass}
          >
            Copy
          </button>
        </div>

        <div className='flex justify-center items-center mt-3 text-white'>
          <input
            className="mx-2"
            type="range"
            min={8}
            max={50}
            value={length}
            id="length"
            onChange={(e) => { setLength(e.target.value) }} />
            
          <label htmlFor="length">Length : {length}</label>

          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numbers"
            className='mx-2'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />
          <label htmlFor="numbers">Numbers</label>

          <input type="checkbox"
            defaultChecked={specialCharAllowed}
            id="specialChar"
            className='mx-2'
            onChange={() => {
              setSpecialCharAllowed((prev) => !prev)
            }} />
          <label htmlFor="specialChar">Special Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
