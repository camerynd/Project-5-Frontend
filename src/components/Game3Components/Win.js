import image from './Images/Win-image.JPG';

export default function Win({handleSubmit}) {

    function handleClick(e) {
        e.preventDefault()
        handleSubmit()
    }

    return (
        <>
            <h2>"Hey Mr Wizard!", you shout up to him, "What if I gave you this gold in exchange
            for not exploding the kingdom? ;)" <br/>"Uhhh lemme take a look at that actually" says 
            the evil wizard. You toss him a chunk of gold, and when he bites it to check the 
            quality BOOM his head explodes. <br/> "WTF just happened?!" Ninja Assassin cries out. 
            <br/>"My intuition told me that those chunks of gold weren't real gold, but tiny BOMBS" you 
            say smugly. You look down and watch as the gigantic two-headed dragon shrinks and 
            morphs into two beautiful horses. The wizard had used his evil magic to turn them into a 
            scary monster, but now that the wizard is gone, his evil magic has worn off and they are restored
            to their original form. But if thats true, then shouldn't the magic that's keeping everyone 
            suspended in mid air wear off too? As this occurs to you, you begin to fall, but then the horses grow 
            wings! You and Ninja Asassin each get onto a horse and fly them all the way back to the kingdom of Dinnerton.
            You live the rest of your life as a good smelling hero with tons of friends and you never learn how or why 
            the horses grew wings that day. The end :3</h2>
            <img className="game3-img" src={image} alt="the heroes"/>
            <div className="win">VICTORY</div>
            <button onClick={(e) => handleClick(e)}>Submit</button>
            <p>Click Start/Stop to start over, click Submit to save game</p>
        </>
    )

}