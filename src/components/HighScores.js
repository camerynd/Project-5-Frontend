import {useState, useEffect} from 'react'

export default function HighScores({currentUser}) {

    const [highScores, setHighScores] = useState([])
    const [isHighRankingPlayer, setIsHighRankingPlayer] = useState(false)

    useEffect(() => {
          fetch(`http://localhost:3000/high_scores`)
          .then((r) => r.json())
          .then((data) => {
              setHighScores(data)
              data.forEach((item) => 
                item.user.id === currentUser.id ?
                setIsHighRankingPlayer(true) :
                '' )
        });
        currentUser.scores.sort((a, b) => {
            return a.score - b.score;
        });
        currentUser.scores.reverse()
    }, []);

    console.log(currentUser)
        
        return (
            <>
            <h1>High Scores:</h1>
            {highScores.map(item => <h2 key={item.id}>score: {item.score} user: {item.user.username}</h2>)}
            <br/>
            {isHighRankingPlayer ? highScores[0].user.id === currentUser.id ? 
            <h1>You are our TOP player! Keep it up to defend your title!</h1> : 
            <h1>Looks like you're one of our top players! Keep playing to be THE top player!</h1> :
            <h1>Looks like you're not one of our top players, which is probably embarassing for you. You should really keep practicing :/</h1>
            }
            <h2>Your top scores:</h2>
            {currentUser.scores.slice(0, 5).map(item => <h2>score: {item.score}</h2>)}
        </>
    )

}
