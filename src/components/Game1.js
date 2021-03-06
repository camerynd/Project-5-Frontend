import {useEffect, useState} from 'react'
import Game1Play from './Game1Play'

export default function Game1({setTheme, currentUser, url}) {

  const [gameActive, setGameActive] = useState(false)

  useEffect(() => {
    setTheme()
  }, []);

  function handleClick() {
    setGameActive(!gameActive)
  }

    return (
        <> 
        <h1>Special Pet</h1>
        <p>Design a pet any way you choose, adopt them to add to your collection!</p>
        <button onClick={handleClick}>Start/Stop</button>
        {gameActive ? <Game1Play url={url} currentUser={currentUser} restart={handleClick}/> : ''}
        </>
    )

}