import image from './Images/Fail5-image.JPG';
import {useState} from 'react'

export default function Fail5({handleSubmit}) {

    const [lastWords, setLastWords] = useState('')

    function handleClick(e) {
        e.preventDefault()
        handleSubmit(lastWords)
    }

    return (
        <>
            <h2>Looks like Stacy was wrong bc you clearly didn't know what to do, you throw the
                gems at the dragon  but the dragon swallows them and they turn out to be power
                gems and they make the dragon 1000000000x bigger and stronger and he becomes so 
                powerful that he swallows the entire world and you die.</h2>
                <img className="game3-img" src={image} alt="dragon eating earth"/>
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