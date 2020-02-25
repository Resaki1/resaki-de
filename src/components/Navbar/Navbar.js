import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Home from "../Home/Home";
import Astro from "../Astro/Astro";
import Landscape from "../Landscape/Landscape";
import Timelapse from "../Timelapse/Timelapse";
import Shop from "../Shop/Shop";
import Gear from "../Gear/Gear";
import About from "../About/About";
import "./Navbar.css"

export default function Navbar() {
    return (
        <Router>
            <div className="layout">
                <div className="navbar">
                    <h2>Resaki Fotografie</h2>
                    <nav>
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/astro" activeClassName="selected">Astrofotografie</NavLink>
                            </li>
                            <li>
                                <NavLink to="/landscape" activeClassName="selected">Landschaftsfotografie</NavLink>
                            </li>
                            <li>
                                <NavLink to="/timelapse" activeClassName="selected">Zeitraffer</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop" activeClassName="selected">Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to="/gear" activeClassName="selected">Ausrüstung</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" activeClassName="selected">About</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
    
                <div className="content">
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/gear">
                            <Gear />
                        </Route>
                        <Route path="/shop">
                            <Shop />
                        </Route>
                        <Route path="/timelapse">
                            <Timelapse />
                        </Route>
                        <Route path="/landscape">
                            <Landscape />
                        </Route>
                        <Route path="/astro">
                            <Astro />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}