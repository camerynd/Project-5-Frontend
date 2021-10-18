import image from './Images/Choice5-image.JPG';

export default function Continuation5({character, fifthChoice}) {

    function handleClickYes() {
        fifthChoice("After days of walking through the tunnel, you and Ninja Assassin were captured by the evil wizard. You took some gold bombs from the cave you were in and used them to explode the wizard, then you and Ninja Assassin returned to the kingdom of Dinnerton as heroes! ", true)
    }
    
    function handleClickNo() {
        fifthChoice("After days of walking through the tunnel, you and Ninja Assassin were captured by the evil wizard. You took some crystals from the cave you were in and threw them at the wizard's dragon, but they only made the dragon stronger and it grew so large it swalowed the whole world and you died. ", false)
    }

    return (
        <>
            <h2>The two of you walk through the underground tunnel in total darkness for almost three days. 
            at 4:51 PM on day 3, Ninja Assassin stops walking. "I thiiiink we're here I can feel it", he says.
            <br/>"Wym you can feel i-" you begin, but suddenly you're cut off by a terrible pain! You groan and 
            shut your eyes, but when you open them, both you and Ninja Assassin are suspended in mid air in the 
            center of a gigantic spooky scary room. You look down, the ground is so far below you that you can't
            even see it!<br/> "Yez ok I was right, we are here! The evil wizard's tower!" says Ninja Assassin.
            <br/>"Heeeheueuehhjjehue", You hear a fearsome cackle, "Welcome to mi towerrrrrr I teleported u here and have you trapped using my evill magic 
            you guys were never gona catch me hehehhhhiheh!" you look up and see the evil wizard floating above you! "I am the evil 
            wizard! I am going to explode the kingdom of Dinnerton because I am a pissed off guy!", he says, "but
            first, I'm gona FEED U TO MY FREAKING DRAGON", as he says this, you watch a 10000000000 ft tall two-headed dragon emerge from 
            the blackness beneath you and let out a deafening roar. Ninja Assassin then pulls out a 
            drawstring bag from his pocket and hands it to you. You open it, and inside are gems and gold from the walls 
            of the cave you were in before. <br/>"I was asking Stacy if she had anything that could assist us on our quest,
            and she said to take these and that you'd know what to do with them." You decide to...</h2>
            <img className="game3-img" src={image} alt="evil wizard"/>
            <button onClick={handleClickNo}>Throw the gems at the dragon</button> <button onClick={handleClickYes}>Bribe the wizard with gold</button>
            <p>Click Start/Stop to start over</p>
        </>
    )

}