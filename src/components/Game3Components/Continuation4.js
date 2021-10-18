import image from './Images/Choice4-image.JPG';

export default function Continuation4({character, fourthChoice}) {

    function handleClickYes() {
        fourthChoice("The mud sucked you into an underground cavern, and Ninja Assassin dove in after you. In the cavern you met a mermaid named Stacy, bathed, then discover a secret tunnel and ventured in. ", true)
    }

    function handleClickNo() {
        fourthChoice("The mud sucked you into an underground cavern, and Ninja Assassin dove in after you. Ninja Assassin then had a secretive convo with a cave-dwelling mermaid, which offended you, and when you confronted him about it you lost your footing and slipped into a pool of water and drowned. ", false)
    }

    return (
        <>
            <h2>You slap your friend's hand away. "WHAT ARE YOU DOINGGG" he shouts as you sink lower into the mud, 
            <br/> "Jus let me go brother...." you whisper as you let the mud consume you entirely. As you float there, 
            sinking ever deeper into the warm mud, you are reminded of your days in the womb,
            and a sense of peace overcomes you. BUT THEN, you are suddenly not submerged in mud anymore?!!? You're free 
            falling at an incredible speed! You let out a shriek and suddenly SPLASH you land in deep a pool of water. You swim
            to the surface and burst out, gasping for air. You examine your surroundings... you seem to be in some sort 
            of underground cavern, the walls glisteng with gems and gold. You hear another loud splash behind you. 
            You turn around to see ninja assassin emerge from the water. <br/> "I dove into the mud puddle after you, brother! Now what in 
            the world is going on here? And whose that behind you?", your ninja friend says. You turn around and see a
            mermaid with legs standing in the corner of the cave. <br/>"Hiii my name is Stacy do you want some soap? You
            smell like a peasant." she says, tossing you a bottle of cucumber mint shower gel. You proceed to wash your
            bod and clothes until you smell clean and delish. 'No longer stinky... no longer friendless...just peasant now', you think to yourself and smile.
             While you bathe, Ninja Assassin seems to be sweet 
            talking Stacy over in the corner of the cave, and you wonder what it is they're talking about. He then walks
            back over to you, kneels, and turns around, inviting you to climb onto his back. <br/>"Hang on tight, {character} ;)"
            he says mysteriously as you climb on. He parkours you both to the opposite end of the cave, then kicks a hole through the
            wall, revealing a secret tunnel! Do you enter the tunnel or confront him about how it was rude of him not to 
            include you in his convo with Stacy?</h2> 
            <img className="game3-img" src={image} alt="cavern soap"/>
            <button onClick={handleClickYes}>Venture into tunnel</button> <button onClick={handleClickNo}>"ngl I'm kindof upset that you didn't include me in your convo w Stacy just now."</button>
            <p>Click Start/Stop to start over</p>
        </>
    )

}