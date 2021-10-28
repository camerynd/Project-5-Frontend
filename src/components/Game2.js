import {useEffect, useState} from 'react'
import Game2Play from './Game2Play'
import Score from './Score'

export default function Game2({setTheme, currentUser, url}) {

  const [gameActive, setGameActive] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [lossMessage, setLossMessage] = useState(false)

  useEffect(() => {
    setTheme()
    if (currentUser) {
      setHighScore(scoreSort()) 
    }
  }, []);

  function scoreSort() {
    if (currentUser) {
      currentUser.scores.sort((a, b) => {
        return a.score - b.score;
      });
      currentUser.scores.reverse()
    }
    if (currentUser) {
      return currentUser.scores[0].score
    }
  }

  function handleClick() {
    setGameActive(!gameActive)
    setScore(0)
    setLossMessage(false)
  }

  function endGame() {
    setGameActive(false)
    setLossMessage(true)
  }
  
  function submitScore() {

      fetch(`${url}/scores`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
              user_id : `${currentUser.id}`,
              score: `${score}`
          }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            currentUser.scores = [...currentUser.scores, data]
            setHighScore(scoreSort())
          })


  }

  function addPoint() {
    var increment = score + 1
    setScore(increment)
  }

    return (
        <>
        <h1>Block Jump</h1>
        <p>Click inside the game screen to jump, don't let the moving blocks touch you!</p>
        <button onClick={handleClick}>Start/Stop</button>
        {gameActive ?
        <> 
        <Game2Play endGame={endGame} submitScore={submitScore} addPoint={addPoint} /> 
        {lossMessage ? <h1 className="lose">Game Over</h1> : ''}
        <Score score={score}/>
        </>
        : <h1>Your current high score is: 
          {currentUser ? currentUser.scores.length > 0 ? highScore : <p>No scores yet!</p> : ''}</h1>}
        </>
    )

}