import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  // const [count, setCount] = useState(0)
  let userName1 = "Shiva"
  let userName2 = "Veer"
  return (
    <>
      <h1 className='bg-green-400 text-black'>Tailwind test</h1>
      <Cards username={userName1} btnText="Click here"/>
      <Cards username={userName2} />
    </>
  )
}

export default App
