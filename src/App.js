import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Resume from "./components/Resume";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav></Nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                </Switch>
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;
