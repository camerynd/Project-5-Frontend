import {useState} from 'react'
import CharacterName from './Game3Components/CharacterName'
import Continuation1 from './Game3Components/Continuation1'
import Continuation2 from './Game3Components/Continuation2'
import Continuation3 from './Game3Components/Continuation3'
import Continuation4 from './Game3Components/Continuation4'
import Continuation5 from './Game3Components/Continuation5'
import Fail1 from './Game3Components/Fail1'
import Fail2 from './Game3Components/Fail2'
import Fail3 from './Game3Components/Fail3'
import Fail4 from './Game3Components/Fail4'
import Fail5 from './Game3Components/Fail5'
import Win from './Game3Components/Win'

export default function Game3Play({restart}) {

    const [character, setCharacter] = useState('')
    const [ternaryBegin, setTernaryBegin] = useState(true)

    const [choice1, setChoice1] = useState('')
    const [continueFail1, setContinueFail1] = useState(true)
    const [ternary1, setTernary1] = useState(true)

    const [choice2, setChoice2] = useState('')
    const [continueFail2, setContinueFail2] = useState(true)
    const [ternary2, setTernary2] = useState(true)

    const [choice3, setChoice3] = useState('')
    const [continueFail3, setContinueFail3] = useState(true)
    const [ternary3, setTernary3] = useState(true)

    const [choice4, setChoice4] = useState('')
    const [continueFail4, setContinueFail4] = useState(true)
    const [ternary4, setTernary4] = useState(true)

    const [choice5, setChoice5] = useState('')
    const [continueFail5, setContinueFail5] = useState(true)
    const [ternary5, setTernary5] = useState(true)

    const [winLoss, setWinLoss] = useState(true)

    function setName(name) {
        setCharacter(name)
        setTernaryBegin(false)
    }

    function firstChoice(answer, result) {
        setChoice1(answer)
        setWinLoss(result)
        setContinueFail1(result)
        setTernary1(false)
    }

    function secondChoice(answer, result) {
        setChoice2(answer)
        setWinLoss(result)
        setContinueFail2(result)
        setTernary2(false)
    }

    function thirdChoice(answer, result) {
        setChoice3(answer)
        setWinLoss(result)
        setContinueFail3(result)
        setTernary3(false)
    }

    function fourthChoice(answer, result) {
        setChoice4(answer)
        setWinLoss(result)
        setContinueFail4(result)
        setTernary4(false)
    }

    function fifthChoice(answer, result) {
        setChoice5(answer)
        setWinLoss(result)
        setContinueFail5(result)
        setTernary5(false)
    }

    function handleSubmit(lastWords) {
        console.log("You were a peasant by the name of " + character + choice1 + choice2 + choice3 + choice4 + choice5 + (winLoss ? ' ADVENTURE STATUS: ' + 'Success!' : 'Your last words were ' + '\"' + lastWords + '\".' + ' ADVENTURE STATUS: ' + 'Failure'))
        restart()
    }

    return (
        <>
            <div>
                {ternaryBegin ? 
                <CharacterName setName={setName}/> :
                    ternary1 ? 
                    <Continuation1 firstChoice={firstChoice} character={character}/> :
                    continueFail1 ? 
                        ternary2 ?
                        <Continuation2 secondChoice={secondChoice} character={character}/> :
                        continueFail2 ?
                            ternary3 ?
                            <Continuation3 thirdChoice={thirdChoice} character={character}/> :
                            continueFail3 ?
                                ternary4 ? 
                                <Continuation4 fourthChoice={fourthChoice} character={character}/> :
                                continueFail4 ?
                                    ternary5 ?
                                    <Continuation5 fifthChoice={fifthChoice} character={character}/> :
                                    continueFail5 ?
                                        <Win handleSubmit={handleSubmit}/> 
                                    : <Fail5 handleSubmit={handleSubmit}/> 
                                : <Fail4 handleSubmit={handleSubmit}/>
                            : <Fail3 handleSubmit={handleSubmit}/> 
                        : <Fail2 handleSubmit={handleSubmit}/>
                    : <Fail1 handleSubmit={handleSubmit}/>
                }
            </div>
        </>
    )

}