import {useEffect, useState} from 'react'
import Game2Play from './Game2Play'

export default function Game2({setTheme}) {

  const [gameActive, setGameActive] = useState(false)

  useEffect(() => {
    setTheme()
  }, []);

  function handleClick() {
    setGameActive(!gameActive)
  }

    return (
        <>
        <h1>Game 2</h1>
        <p>instructions blablablablabla</p>
        <button onClick={handleClick}>Start/Stop</button>
        {gameActive ? <Game2Play restart={handleClick}/> : ''}
        </>
    )

}