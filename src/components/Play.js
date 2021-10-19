import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Game1 from "./Game1"
import Game2 from "./Game2"
import Game3 from "./Game3"

export default function Play({currentUser}) {

    return (
        <>
        {/* <div className="screen">
            <img src="https://clipartcraft.com/images/transparent-tv-vaporwave-1.png" alt="screen"/>
        </div> */} 
        <div className="container">
            <Router>
                <div className="link-div1">
                    <Link className="links2" to="/game1">Game 1</Link>
                </div>
                <div className="link-div2">
                    <Link className="links2" to="/game2">Game 2</Link>
                </div>
                <div className="link-div3">
                    <Link className="links2" to="/game3">Game 3</Link>
                </div>
                {/* </nav> */}
                <div className="game">
                <Switch>
                    <Route path="/game1">
                        <Game1 currentUser={currentUser}/>
                    </Route>
                    <Route path="/game2">
                        <Game2 currentUser={currentUser}/>
                    </Route>
                    <Route path="/game3">
                        <Game3 currentUser={currentUser}/>
                    </Route>
                </Switch>
                </div>
            </Router>
        </div>
        </>
    )

}