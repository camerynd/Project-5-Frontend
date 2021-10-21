import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Pets from "./Pets"
import HighScores from "./HighScores"
import Adventures from "./Adventures"

export default function YourStuff({currentUser}) {

    return (
        <>
        <div className="container3">
            <Router>
                <div className="link-div">
                    <Link className="links2" to="/data/pets">Your Pets</Link>
                </div>
                <div className="link-div">
                    <Link className="links2" to="/data/high_scores">Number Cruncher High Scores</Link>
                </div>
                <div className="link-div">
                    <Link className="links2" to="/data/adventures">Saved Adventures</Link>
                </div>
                <div className="game">
                <Switch>
                    <Route path="/data/pets">
                        <Pets currentUser={currentUser}/>
                    </Route>
                    <Route path="/data/high_scores">
                        <HighScores currentUser={currentUser}/>
                    </Route>
                    <Route path="/data/adventures">
                        <Adventures currentUser={currentUser}/>
                    </Route>
                </Switch>
                </div>
            </Router>
        </div>
        </>
    )

}