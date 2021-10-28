import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import {useState} from 'react'
import Game1 from "./Game1"
import Game2 from "./Game2"
import Game3 from "./Game3"

export default function Play({currentUser, url}) {

    const [activeGame, setActiveGame] = useState('')
    const [activeGameScreen, setActiveGameScreen] = useState('')

    function handleClick3() {
        setActiveGame('adventure')
        setActiveGameScreen('adventure-screen')
    }

    function handleClick2() {
        setActiveGame('arcade')
        setActiveGameScreen('arcade-screen')
    }

    function handleClick1() {
        setActiveGame('dress-up')
        setActiveGameScreen('dress-up-screen')
    }

    return (
        <>
        <div className={`container2 ${activeGame}`}>
            <Router>
                <div className="link-div">
                    <Link className="links2" to="/play/game1">Special Pet</Link>
                </div>
                <div className="link-div">
                    <Link className="links2" to="/play/game2">Block Jump</Link>
                </div>
                <div className="link-div">
                    <Link className="links2" to="/play/game3">Epic Quest</Link>
                </div>
                <div className={`game ${activeGameScreen}`}>
                <Switch>
                    <Route path="/play/game1">
                        <Game1 url={url} setTheme={handleClick1} currentUser={currentUser}/>
                    </Route>
                    <Route path="/play/game2">
                        <Game2 url={url} setTheme={handleClick2} currentUser={currentUser}/>
                    </Route>
                    <Route path="/play/game3">
                        <Game3 url={url} setTheme={handleClick3} currentUser={currentUser}/>
                    </Route>
                </Switch>
                </div>
            </Router>
        </div>
        </>
    )

}