import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "../Home/Home";
import Astro from "../Astro/Astro";
import Landscape from "../Landscape/Landscape";
import Timelapse from "../Timelapse/Timelapse";
import Shop from "../Shop/Shop";
import Gear from "../Gear/Gear";
import About from "../About/About";

export default function Navbar() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/astro">Astrofotografie</Link>
                        </li>
                        <li>
                            <Link to="/landscape">Landschaftsfotografie</Link>
                        </li>
                        <li>
                            <Link to="/timelapse">Zeitraffer</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/gear">Ausrüstung</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
    
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
        </Router>
    );
}