import {useEffect, useState} from 'react'
import Game1Play from './Game1Play'

export default function Game1({setTheme, currentUser}) {

  const [gameActive, setGameActive] = useState(false)

  useEffect(() => {
    setTheme()
  }, []);

  function handleClick() {
    setGameActive(!gameActive)
  }

    return (
        <> 
        <h1>Pet Shop</h1>
        <p>Design a pet any way you choose, adopt them to add to your collection!</p>
        <button onClick={handleClick}>Start/Stop</button>
        {gameActive ? <Game1Play currentUser={currentUser} restart={handleClick}/> : ''}
        </>
    )

}