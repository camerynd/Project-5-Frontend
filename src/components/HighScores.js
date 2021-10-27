import {useState, useEffect} from 'react'

export default function HighScores({currentUser, url}) {

    const [highScores, setHighScores] = useState([])
    const [isHighRankingPlayer, setIsHighRankingPlayer] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        const token = localStorage.getItem("jwt");
          fetch(`${url}/api/v1/profile`, {
          method: "GET",
          headers: {
          Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              setData(data.user)
              setUser(data.user)
              data.user.scores.sort((a, b) => {
                return a.score - b.score;
            });
            data.user.scores.reverse()
            });
          } else {
            console.log("please log in")
          }
        });

        // fetch(`http://localhost:3000/high_scores`)
        // .then((r) => r.json())
        // .then((stuff) => {
        //     setHighScores(stuff)
        //     stuff.forEach((item) => 
        //       item.user.id === user.id ?
        //       setIsHighRankingPlayer(true) :
        //       '' ) 
        // });
        }, []);

        function setData(user) {
            fetch(`${url}/high_scores`)
            .then((r) => r.json())
            .then((stuff) => {
                setHighScores(stuff)
                stuff.forEach((item) => 
                  item.user.id === user.id ?
                  setIsHighRankingPlayer(true) :
                  '' ) 
            });
        }


    // useEffect(() => {
        // currentUser.scores.sort((a, b) => {
        //     return a.score - b.score;
        // });
        // currentUser.scores.reverse()
       
    // }, []);

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
            {user.scores ? user.scores.length > 0 ? user.scores.slice(0, 5).map(item => <h2>score: {item.score}</h2>) : <h2>No scores to display</h2> : ''}
        </>
    )

}
