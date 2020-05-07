import React from 'react';
import Career from './Career';
import Container from './test1';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <Router>
                <div className="container">
                    <div className="left">
                        <Link to="/">Home</Link>
                        <div className="subnav">
                            <button className="subnavbtn">About</button>
                            <div className="subnav-content">
                                <Link to="/Company">Company</Link>
                                <Link to="/Career">Career</Link>
                            </div>
                        </div>
                        <div className="subnav">
                            <button className="subnavbtn">Services</button>
                            <div className="subnav-content">
                                <Link to="Bring">Bring</Link>
                                <Link to="Check">Check</Link>
                            </div>
                        </div>
                        <div className="subnav">
                            <button className="subnavbtn">Partners</button>
                            <div className="subnav-content">
                                <Link to="Link1">Link 1</Link>
                                <Link to="Link2">Link 2</Link>
                                <Link to="Link3">Link 3</Link>
                                <Link to="Link4">Link 4</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Link to="LogOut">Log out</Link>
                        <Link to="Signup">Signup</Link>
                    </div>
                </div>
                <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/Company">
                            <Company />
                        </Route>
                        <Route exact path="/Career">
                            <Career />
                        </Route>
                        <Route exact path="/Link1">
                            <Container />
                        </Route>
                    </Switch>
            </Router>
        )
    }
};

function Home() {
    return (
      <div className="centered">
        <h2>Welcome Home</h2>
      </div>
    );
  }

  function Company() {
    return (
      <div className="centered">
        <h2>Pricey Company</h2>
      </div>
    );
  }

export default Navbar;