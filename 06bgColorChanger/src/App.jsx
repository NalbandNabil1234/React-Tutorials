import { useState } from 'react'


function App() {
  const [color, setColor] = useState('#4b5563')
  
  return (
    <div className='w-screen h-screen flex justify-center items-center' style={{backgroundColor: color}}>

      <div className='w-4/5 h-12 bg-blue-400 rounded-full fixed bottom-2 flex justify-center items-center m-6'>

      <button className='bg-red-700 w-20 h-9 rounded-full text-white pl-2 pr-2 ml-4 mr-2 pt-1.5 pb-2'
      onClick={() => setColor('red')}>Red</button>
      <button className='bg-yellow-700 w-20 h-9 rounded-full text-white pl-2 pr-2 ml-4 mr-2 pt-1.5 pb-2'
      onClick={() => setColor('yellow')}>yellow</button>
      <button className='bg-blue-700 w-20 h-9 rounded-full text-white pl-2 pr-2 ml-4 mr-2 pt-1.5 pb-2'
      onClick={() => setColor('blue')}>blue</button>
      <button className='bg-green-700 w-20 h-9 rounded-full text-white pl-2 pr-2 ml-4 mr-2 pt-1.5 pb-2'
      onClick={() => setColor('green')}>green</button>
  
      </div>

    </div>
  )
}

export default App
