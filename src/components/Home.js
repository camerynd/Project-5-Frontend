import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Game1 from "./Game1"
import Game2 from "./Game2"
import Game3 from "./Game3"

export default function Home() {

    return (
        <>
        {/* <div className="screen">
            <img src="https://clipartcraft.com/images/transparent-tv-vaporwave-1.png" alt="screen"/>
        </div> */} 
        <div className="container">
            <div className="welcome">
            <h1>Welcome, Gamer!</h1>
            <div className="profile">
                <h2>Ronaldo55420</h2>
                <img src="http://suptg.thisisnotatrueending.com/archive/16054280/images/1314247224487.jpg" alt="profile picture"/>
                <p>Bio example Bio example Bio example Bio example Bio example Bio example Bio example Bio example Bio example</p>
                <button>Edit Profile</button>
            </div>
            </div>
        </div>
        </>
    )

}