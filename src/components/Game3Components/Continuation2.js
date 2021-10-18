import image from './Images/Choice2-image.JPG';

export default function Continuation2({character, secondChoice}) {

    function handleClickYes() {
        secondChoice("Not long into your first day of journeying, you were confronted by a Ninja Assassin, and you decided to stand your ground. ", true)
    }

    function handleClickNo() {
        secondChoice("Not long into your first day of journeying, you were confronted by a Ninja Assassin and you tried to run which overwhelmed your body so much you died. ", false)
    }

    return (
        <>
            <h2>"Good choice" says King Dinner, "I prob was going to stab you if you had said no >:3."
            <br/>And so it was decided that you, {character}, would be the hero of Dinnerton. The king 
            gave you a map to follow all the way to the tower of the evil wizard, and judging by said map, 
            it would be a long and harrowing journey. You get a good night's rest and wake up in the morning, 
            you eat the rest of your dirty loaf of bread because you know you'll need your strength, and you
            set off to begin your journey. However, not hours into your first day of travel, you are confronted
            by a 10-foot-tall ninja assassin! Keep in mind, you are just a stinky peasant with no friends. 
            You are like 5'3, super malnourished despite the dirty old bread you ate for breakfast, and have 
            no idea how to fight/also have no weapons.<br/> Wyd?</h2>
            <img className="game3-img" src={image} alt="ninja assassin"/>
            <button onClick={handleClickYes}>Fight!</button> <button onClick={handleClickNo}>Flee!</button>
            <p>Click Start/Stop to start over</p>
        </>
    )

}