import {Route, Switch, NavLink, useRouteMatch } from "react-router-dom"
import Game3Play from './Game3Play'

export default function Game3() {

    const match = useRouteMatch();

    return (
        <>
        <p>instructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructions</p>
          <nav>
            <NavLink className="links" to={`${match.url}/game3_play`}>Play</NavLink>
          </nav>
          <Switch>
          <Route path={`${match.path}/game3_play`}>
            <Game3Play/>
          </Route>
        </Switch>
        </>
    )

}