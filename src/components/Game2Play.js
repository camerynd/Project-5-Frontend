import {useState, useRef, useEffect} from 'react'


export default function Game2Play({addPoint, submitScore, endGame}) {

    useEffect(() => {
        setTop(characterRef.current.getBoundingClientRect().top - 20)
      }, []);

    const [loser, setLoser] = useState(false)
    const [top, setTop] = useState()
    // const [score, setScore] = useState(0)

    const characterRef = useRef()
    const block1Ref = useRef()
    const block2Ref = useRef()
    
    const [characterClass, setCharacterClass] = useState("character")
    const [block1Class, setBlock1Class] = useState("block1")
    const [block2Class, setBlock2Class] = useState("block2")
    const [activePlay, setActivePlay] = useState(false)
    
    let character = <div className={characterClass} ref={characterRef}></div>
    let block1 = <div className={block1Class} ref={block1Ref}></div>
    let block2 = <div className={block2Class} ref={block2Ref}></div>
    
    
    function jump() {
        if (characterClass !== "character animate") {
            setCharacterClass("character animate")
        }
        setTimeout(() => {setCharacterClass("character")}, 500)

        if (activePlay) {
            if (loser === false) {
                addPoint()
            }
        }
    }

    setTimeout(() => {

            setActivePlay(true)

            setBlock1Class("block1 move1")
            setBlock2Class("block2 move2")

            var interval = setInterval(() => {
        
                // console.log("     ")
                // console.log(characterRef.current.getBoundingClientRect().right)
                // console.log(characterRef.current.getBoundingClientRect().left)
                // console.log(block1Ref.current.getBoundingClientRect().left)
                // console.log(block2Ref.current.getBoundingClientRect().left)

                if(characterRef.current) {
                    // console.log("     ")
                    // console.log(characterRef.current.getBoundingClientRect().right)
                    // console.log(characterRef.current.getBoundingClientRect().left)
                    // console.log(characterRef.current.getBoundingClientRect().top)
                    var characterTop = characterRef.current.getBoundingClientRect().top
                    var characterLeft = characterRef.current.getBoundingClientRect().left
                    var characterRight = characterRef.current.getBoundingClientRect().right
                }
                if(block1Ref.current) {
                    // console.log(block1Ref.current.getBoundingClientRect().left)
                    var block1Left = block1Ref.current.getBoundingClientRect().left
                }
                if(block2Ref.current) {
                    // console.log(block2Ref.current.getBoundingClientRect().left)
                    var block2Left = block2Ref.current.getBoundingClientRect().left
                }

                if((block1Left <= characterRight && block1Left >= characterLeft && characterTop >= top)
                || (block2Left <= characterRight && block2Left >= characterLeft && characterTop >= top)) {
                    clearInterval(interval)
                    // setLoser(true)
                    console.log("u lose")
                    submitScore()
                    endGame()
                    // setBlock1Class("block1")
                    // setBlock2Class("block2")
                    // setActivePlay(false)
                }

            }, 10)

        }, 3000)


    return (
        <div onClick={jump} className="game2-play-screen">
            {character}
            {block1}
            {block2}
        </div>
    )

}
