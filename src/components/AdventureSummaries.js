
export default function AdventureSummaries({deleteSummary, adventure}) {

    function handleClick() {
        deleteSummary(adventure.id)
    }

    return (
        <>
            <div className="adventure-summary">
               <h2>{adventure.adventure_summary}</h2>
                <button onClick={handleClick}>Delete Summary</button>
            </div>
        </>
    )

}