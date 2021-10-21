import {useState, useRef, useEffect} from 'react'

export default function Game2Play({restart}) {

    const characterRef = useRef(null)
    const blockRef = useRef(null)

    const [characterClass, setCharacterClass] = useState("character")
    const [blockClass, setBlockClass] = useState("block")

    let character = <div className={characterClass} ref={characterRef}></div>
    let block = <div className={blockClass} ref={blockRef}></div>

    function jump() {
        if (characterClass !== "character animate") {
            setCharacterClass("character animate")
        }
        setTimeout(() => {setCharacterClass("character")}, 500)
        checkLoss()
    }
    // requestAnimationFrame(checkLoss)
    
// useEffect(() => {
    // setInterval(() => {
function checkLoss() {
        console.log(characterRef.current.getBoundingClientRect())
        console.log(blockRef.current.getBoundingClientRect())

        if(characterRef.current !== null) {
            var characterTop = characterRef.current.getBoundingClientRect().top
        }
        if(blockRef.current !== null) {
            var blockLeft = blockRef.current.getBoundingClientRect().left
        }

        // var characterTop = characterRef === null ? '' : characterRef.current.getBoundingClientRect().top

        // var blockLeft = blockRef === null ? '' : blockRef.current.getBoundingClientRect().left

        if(blockLeft < 325.3125 && characterTop === 551.875) {
            restart()
            console.log("u lose")
        }
    
    }
    // }, 10)
// });

    return (
        <div onClick={jump} className="game2-play-screen">
            {character}
            {block}
        </div>
    )

}
