import {useState, useEffect} from 'react'
import Game3Play from './Game3Play'

export default function Game3({currentUser, setTheme, url}) {

  useEffect(() => {
    setTheme()
  }, []);

  const [gameActive, setGameActive] = useState(false)

    function handleClick() {
      setGameActive(!gameActive)
    }

    return (
        <>
        <h1>Epic Quest</h1>
        <p>Will you survive this epic quest? Respond to each prompt using your intuition and see how far you make it. (I bet you will die)</p>
          <button onClick={handleClick}>Start/Stop</button>
          {gameActive ? <Game3Play url={url} currentUser={currentUser} restart={handleClick}/> : ''}
        </>
    )

}