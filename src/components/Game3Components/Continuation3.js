// import {useSelector} from 'react-redux'
import image from './Images/Choice3-image.JPG';

export default function Continuation3({thirdChoice}) {

    // const character = useSelector(s => s.character)

    function handleClickYes() {
        thirdChoice("You and the Nija Assassin became BFFs and continued on the journey together. Shortly after, you got your foot stuck in a mud vortex and rather than resisting, decided to let the mud take you. ", true)
    }

    function handleClickNo() {
        thirdChoice("You and the Nija Assassin became BFFs and continued on the journey together. Shortly after, you got your foot stuck in a mud vortex and your leg was ripped off, so you died. ", false)
    }

    return (
        <>
            <h2>You start shouting in the hopes of intimidating him into leaving you alone, 
            "I DON'T KNOW WHAT YOU WANT FROM ME, BUSTER BUT I WILL LITERALLY KICK YOUR ASS IDGAF", you 
            scream in his face. <br/> "Ok calm down You're being crazy" he says calmly. You're taken aback
            now. What is this? He's not trying to attack me? <br/>"Uhhh... I thought you were going to mess 
            me up hardcore..." You say, your voice trembling with embarrassment over your quickness to judge 
            this kind man. <br/>"I just wanted to ask you if we could be BFFs... I heard King Dinner asked 
            you to be the hero of Dinnerton and I think thats really cool but like you're a stinky peasant
            w/ no friends and you prob won't make it out there on your own. I thought you could use a boss
            baller ninja assassin like me on your journey." <br/>You respond by giving him a big hug and now 
            you two are officially BFFs. You may still be a stinky peasant, but now you have a friend! This 
            is the best day of your whole life. The two of you continue on foot towards the tower of the evil 
            wizard. The next day around 9:40 AM, you guys are walking and OH NO you get your foot stuck in a wet
            mud puddle! It starts sucking your whole leg in, as if it is some deep scary mud vortex. "OMG are 
            you okay? Here take my hand i will help you out of that mud pud" your ninja assassin friend says, 
            reaching out his hand. You then...</h2>
            <img className="game3-img" src={image} alt="the boys"/>
            <button onClick={handleClickNo}>take his hand</button> <button onClick={handleClickYes}>submit to the will of the mud</button>
            <p>Click Start/Stop to start over</p>
        </>
    )

}