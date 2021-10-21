import AdventureSummaries from './AdventureSummaries'
import {useState, useEffect} from 'react'
export default function Adventures() {

    const [adventures, setAdventures] = useState([])
    // const [user, setUser] = useState({})

    useEffect(() => {
        const token = localStorage.getItem("jwt");
          fetch(`http://localhost:3000/api/v1/profile`, {
          method: "GET",
          headers: {
          Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
            //   setUser(data.user)
              setAdventures(data.user.adventures)
            });
          } else {
            console.log("please log in")
          }
        });
        }, []);


//     useEffect(() => {
//         return (currentUser ? setAdventures(currentUser.adventures) : '')
//   }, []);

    function deleteSummary(id) {
        
        fetch(`http://localhost:3000/adventures/${id}`, {
        method: "DELETE",
        }).then((r) => {
        if (r.ok) {
            console.log("deleted")
            setAdventures((advs) =>
            advs.filter((adv) => adv.id !== id));
            }
        });
       
    }

    return (
        <>
            <h1>Saved Adventures:</h1>
            {adventures.length > 0 ? 
            adventures.map((adv) => <AdventureSummaries key={adv.id} adventure={adv} deleteSummary={deleteSummary}/>)
            : <h2>You haven't saved any adventures yet!</h2>}
        </>
    )

}
