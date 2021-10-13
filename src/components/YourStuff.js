import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Pets from "./Pets"
import HighScores from "./HighScores"
import Adventures from "./Adventures"

export default function YourStuff() {

    return (
        <>
        {/* <div className="screen">
            <img src="https://clipartcraft.com/images/transparent-tv-vaporwave-1.png" alt="screen"/>
        </div> */} 
        <div className="container">
            <Router>
                {/* <nav className="navbar"> */}
                <div activeClassName="active-game" className="link-div1">
                    <Link className="links2" to="/pets">Your Pets</Link>
                </div>
                <div activeClassName="active-game" className="link-div2">
                    <Link className="links2" to="/high_scores">Number Cruncher High Scores</Link>
                </div>
                <div activeClassName="active-game" className="link-div3">
                    <Link className="links2" to="/adventures">Your Adventures</Link>
                </div>
                {/* </nav> */}
                <div className="game">
                <Switch>
                    <Route path="/pets">
                        <Pets/>
                    </Route>
                    <Route path="/high_scores">
                        <HighScores/>
                    </Route>
                    <Route path="/adventures">
                        <Adventures/>
                    </Route>
                </Switch>
                </div>
            </Router>
        </div>
        </>
    )

}