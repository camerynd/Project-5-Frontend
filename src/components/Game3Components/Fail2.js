import image from './Images/Fail2-image.JPG';
import {useState} from 'react'

export default function Fail2({handleSubmit}) {

    const [lastWords, setLastWords] = useState('')

    function handleClick(e) {
        e.preventDefault()
        handleSubmit(lastWords)
    }

    return (
        <>
            <h2>You turn around and run in the opposite direction of the Ninja Assassin. BUT you seem 
            to have misevaluated your physical capabilities. Running puts such a strain on your malnourished 
            peasant body that you collapse, then foodborne illness from the dirty bread kicks in and you puke 
            so hard you die.</h2>
            <img className="game3-img" src={image} alt="u puke dead"/>
            <div className="lose">FATALITY</div>
            <label for="last words">Any last words?...</label>
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