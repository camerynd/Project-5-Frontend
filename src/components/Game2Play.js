// import {useState, useRef, useEffect} from 'react'

// export default function Game2Play({restart}) {

//     const characterRef = useRef(null)
//     const block1Ref = useRef(null)
//     const block2Ref = useRef(null)

//     const [characterClass, setCharacterClass] = useState("character")
//     const [block1Class, setBlock1Class] = useState("block1")
//     const [block2Class, setBlock2Class] = useState("block2")

//     let character = <div className={characterClass} ref={characterRef}></div>
//     let block1 = <div className={block1Class} ref={block1Ref}></div>
//     let block2 = <div className={block2Class} ref={block2Ref}></div>

//     function jump() {
//         if (characterClass !== "character animate") {
//             setCharacterClass("character animate")
//         }
//         setTimeout(() => {setCharacterClass("character")}, 500)
//         // checkLoss()
//     }
//     // requestAnimationFrame(checkLoss)
    
// // useEffect(() => {
// // setTimeout(() => {

// //     setInterval(() => {
// // function checkLoss() {
//     const interval = setInterval(() => {

//         // console.log(characterRef.current.getBoundingClientRect().right)
//         // console.log(characterRef.current.getBoundingClientRect().left)
//         // console.log(block1Ref.current.getBoundingClientRect().left)
//         // console.log(block2Ref.current.getBoundingClientRect().left)
//         // console.log(screenRef.current.getBoundingClientRect())

//         // console.log(window.innerHeight)
//         // console.log(window.innerWidth)

//         if(characterRef) {
//             var characterTop = characterRef.current.getBoundingClientRect().top
//             var characterLeft = characterRef.current.getBoundingClientRect().left
//             var characterRight = characterRef.current.getBoundingClientRect().right
//         }
//         if(block1Ref) {
//             var block1Left = block1Ref.current.getBoundingClientRect().left
//         }
//         if(block2Ref) {
//             var block2Left = block2Ref.current.getBoundingClientRect().left
//         }

//         // console.log(window.innerWidth)
//         // console.log(screenLeft)

//         // var characterTop = characterRef === null ? '' : characterRef.current.getBoundingClientRect().top

//         // var blockLeft = blockRef === null ? '' : blockRef.current.getBoundingClientRect().left

//         if((block1Left < characterRight && block1Left > characterLeft && characterTop >= 130) 
//         || (block2Left < characterRight && block2Left > characterLeft && characterTop >= 130)) {
//             clearInterval(interval)
//             console.log("u lose")
//         }
    
//     }, 10)
// // }, 3000)
// // });

//     return (
//         <div onClick={jump} className="game2-play-screen">
//             {character}
//             {block1}
//             {block2}
//         </div>
//     )

// }
