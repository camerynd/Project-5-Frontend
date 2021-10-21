import image from './Images/Fail4-image.JPG';
import {useState} from 'react'

export default function Fail4({handleSubmit}) {

    const [lastWords, setLastWords] = useState('')

    function handleClick(e) {
        e.preventDefault()
        handleSubmit(lastWords)
    }

    return (
        <>
            <h2>"Ok so its not a super big deal but I think it was kindof rude that you were talking 
            to Stacy so long just now and didn't even try to include me in the conversation :/" you 
            say reluctantly. Ninja Assassin begins, <br/>"OMG im so sorry i didn't mean to hurt your feelings! we were just
            talking about-", but before he can finish, you trip and fall back into the pool of water and drown.</h2>
            <img className="game3-img" src={image} alt="you drowning"/>
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