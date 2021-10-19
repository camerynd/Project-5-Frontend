import AdventureSummaries from './AdventureSummaries'
export default function Adventures({currentUser}) {

    function deleteSummary(id) {
        
        fetch(`http://localhost:3000/adventures/${id}`, {
        method: "DELETE",
        }).then((r) => {
        if (r.ok) {
            console.log("deleted")
            const update = currentUser.adventures.filter((adv) => adv.id !== id)
            currentUser.adventures = update
            }
        });
       
    }

    return (
        <>
            <h1>Saved Adventures:</h1>
            {currentUser.adventures.length > 0 ? 
            currentUser.adventures.map((adv) => <AdventureSummaries key={adv.id} adventure={adv} deleteSummary={deleteSummary}/>)
            : <h2>You haven't saved any adventures yet!</h2>}
        </>
    )

}

// currentUser.adventures.map(adv => 
//     <div className="adventure-summary">
//         <h2>{adv.adventure_summary}</h2>
//         <button onClick={deletePage(adv.id)}>Delete Summary</button>
//     </div>)