import {Route, Switch, NavLink, useRouteMatch } from "react-router-dom"
import {useEffect} from 'react'
import Game2Play from './Game2Play'

export default function Game2({setTheme}) {

  useEffect(() => {
    setTheme()
  }, []);

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