import { useState } from 'react'
import './App.css'
import quotes from "./db/quotes.json"
import randomElement from './components/RandomElement';
import PhraseComponent from './components/PhraseComponent';
import nva1 from "../public/img/nva1.png"
import nva2 from "../public/img/nva2.png"
import nva3 from "../public/img/nva3.png"

const backImg = ["bg1", "bg2", "bg3", "bg4"]
const shipSpace = [nva1, nva2, nva3]

function App() {
  const [quote, setQuote] = useState(randomElement(quotes))
  const [backGround, setBackGround] = useState(randomElement(backImg))
  const [ship, setShip] = useState(randomElement(shipSpace));


  const handleClick = () => {
    setQuote(randomElement(quotes))
    setBackGround(randomElement(backImg))
    setShip(randomElement(shipSpace))
  }

  return (
    <>
      <main className={`app ${backGround}`}>
        <h1 className='title'>INFO GALAX</h1>
        <PhraseComponent
        handleClick={handleClick} 
        quote={quote}/>
        <img className='ship' src={ship}/>
      </main>
    </>
  )
}

export default App
