import image from './Images/Fail1-image.JPG';
import {useState} from 'react'

export default function Fail1({handleSubmit}) {

    const [lastWords, setLastWords] = useState('')

    function handleClick(e) {
        e.preventDefault()
        handleSubmit(lastWords)
    }

    return (
        <>
            <h2>Bad move. King Dinner stabs you for disrespecting him. You try to treat your wound, but as you said,
            you're just a stinky peasant with no friends. Therefor, you have no money to see a doctor, no friends
            to nurse you back to health, and you die of a staph infection a week later.</h2>
            <img className="game3-img" src={image} alt="king din stab"/>
            <div className="lose">FATALITY</div>
            <label htmlFor="last words">Any last words?...</label>
            <input
                type="text"
                value={lastWords}
                onChange={(e) => setLastWords(e.target.value)}
            />
            <button onClick={(e) => handleClick(e)}>Submit</button>
            <p>Click Start/Stop to start over, click Submit to save game</p>
        </>
    )

}