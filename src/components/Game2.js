import {Route, Switch, NavLink, useRouteMatch } from "react-router-dom"
import Game2Play from './Game2Play'
import HighScores from './HighScores'

export default function Game2() {

    const match = useRouteMatch();

    return (
        <>
        <p>instructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructions</p>
          <nav>
            <NavLink className="links" to={`${match.url}/game2_play`}>Play</NavLink>
          </nav>
          <Switch>
          <Route path={`${match.path}/game2_play`}>
            <Game2Play/>
          </Route>
        </Switch>
        </>
    )

}