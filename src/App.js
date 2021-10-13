import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from "./components/Home"
import Play from "./components/Play"
import YourStuff from "./components/YourStuff"
import LoginPage from "./components/LoginPage"

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  function login() {
    setLoggedIn(!loggedIn)
  }

  return (
    <div className="App">
      {loggedIn ?
      <Router>
        <nav className="navbar-container">
          <img src="http://suptg.thisisnotatrueending.com/archive/16054280/images/1314247224487.jpg" alt="profile picture"/>
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/play">Play</Link>
          <Link className="links" to="/your_stuff">Your Stuff</Link>
          <button className="logout">Logout</button>
        </nav>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/play">
              <Play/>
            </Route>
            <Route exact path="/your_stuff">
              <YourStuff/>
            </Route>
      </Router> :
      <LoginPage login={login}/>
      }
    </div>
  )
}

export default App;
