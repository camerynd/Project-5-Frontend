
import image from './Images/Choice1-image.JPG';

export default function Continuation1({character, firstChoice}) {

    function handleClickYes() {
        firstChoice(", one day King Dinner asked you to be the hero of Dinnerton and you accepted. ", true)
    }

    function handleClickNo() {
        firstChoice(", one day King Dinner asked you to be the hero of Dinnerton and you declined, so he stabbed you. ", false)
    }

    return (
        <>
            <h2>You are {character}, a common peasant in the kingdom of Dinnerton. 
            One day as you sit at home, nibbling away at a dirty old loaf of bread, you hear a knock 
            at the door of your humble little shack. "Who could that be? I am just a stinky peasant with 
            no friends", you mumble to yourself as you get up to answer the door. When you open the door, 
            you're blinded by the gleam of a shining crown. Could it be? It is! King Dinner himself stands 
            before you, you avert your eyes and fall to your knees, for he is a merciless ruler who has been 
            known to punish harshly those who dare disrespect him.
            <br/> "Greetings, peasant", he says, "Your house is gross. 
            Anyways, I have come to present you with the most enticing opportunity you will ever recieve in your 
            depressing life. An evil wizard threatens our kindom, and I need a brave adventurer to journey to his 
            tower and freaking take. him. down. Will you be our hero?"
            </h2>
            <img className="game3-img" src={image} alt="king din"/>
            <button onClick={handleClickYes}>Hell ya</button> <button onClick={handleClickNo}>Hell no</button>
            <p>Click Start/Stop to start over</p>
        </>
    )

}