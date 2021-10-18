import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Pets from "./Pets"
import HighScores from "./HighScores"
import Adventures from "./Adventures"

export default function YourStuff({currentUser}) {

    return (
        <>
        <div className="container">
            <Router>
                <div activeClassName="active-game" className="link-div1">
                    <Link className="links2" to="/pets">Your Pets</Link>
                </div>
                <div activeClassName="active-game" className="link-div2">
                    <Link className="links2" to="/high_scores">Number Cruncher High Scores</Link>
                </div>
                <div className="game">
                <Switch>
                    <Route path="/pets">
                        <Pets pets={currentUser.pets}/>
                    </Route>
                    <Route path="/high_scores">
                        <HighScores currentUser={currentUser}/>
                    </Route>
                </Switch>
                </div>
            </Router>
        </div>
        </>
    )

}