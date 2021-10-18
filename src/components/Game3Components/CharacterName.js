import {useState} from 'react'
export default function CharacterName({setName}) {

    const [characterName, setCharacterName] = useState('')

    function handleClick(e) {
        e.preventDefault()
        setName(characterName)
    }

    return (
        <>
            <h2>Welcome, player. What is your name?</h2>
            <input
                placeholder="Character Name..."
                type="text"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
            />
            <button onClick={(e) => handleClick(e)}>Continue</button>
        </>
    )

}