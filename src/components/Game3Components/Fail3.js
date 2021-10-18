import image from './Images/Fail3-image.JPG';
import {useState} from 'react'

export default function Fail3({handleSubmit}) {

    const [lastWords, setLastWords] = useState('')

    function handleClick(e) {
        e.preventDefault()
        handleSubmit(lastWords)
    }

    return (
        <>
            <h2>You take his hand, but you are rlllllly stuck. He pulls and pulls, but the 
            mud just wont quit vortex sucking you. Ninja Assassin pulls so hard that your entire 
            leg is ripped from your body and you die.</h2>
            <img className="game3-img" src={image} alt="foot"/>
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