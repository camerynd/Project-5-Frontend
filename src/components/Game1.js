import {Route, Switch, NavLink, useRouteMatch } from "react-router-dom"
import Game1Play from './Game1Play'

export default function Game1() {

    const match = useRouteMatch();
    console.log(match.url)

    return (
        <> 
        <p>instructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructionsinstructions</p>
        {/* <img src="https://clipartcraft.com/images/transparent-tv-vaporwave-1.png" alt="screen"/> */}
          <nav>
            <NavLink className="links" to={`${match.url}/game1_play`}>Play</NavLink>
          </nav>
          <Switch>
          <Route path={`${match.path}/game1_play`}>
            <Game1Play/>
          </Route>
        </Switch>
        </>
    )

}