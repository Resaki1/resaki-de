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
import "./Navbar.css";
import Sidebar from "react-sidebar";
import MenuIcon from "@material-ui/icons/Menu";

const mql = window.matchMedia(`(min-width: 800px)`);

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  sidebarLinks = (
    <>
      <h2>Resaki Fotografie</h2>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="selected"
              onClick={() => this.onSetSidebarOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/astro"
              activeClassName="selected"
              onClick={() => this.onSetSidebarOpen(false)}
            >
              Astrofotografie
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/landscape"
              activeClassName="selected"
              onClick={() => this.onSetSidebarOpen(false)}
            >
              Landschaftsfotografie
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/timelapse"
              activeClassName="selected"
              onClick={() => this.onSetSidebarOpen(false)}
            >
              Zeitraffer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              activeClassName="selected"
              onClick={() => this.onSetSidebarOpen(false)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gear"
              activeClassName="selected"
              onClick={() => this.onSetSidebarOpen(false)}
            >
              Ausrüstung
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="selected"
              onClick={() => this.onSetSidebarOpen(false)}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );

  render() {
    return (
      <Router>
        <Sidebar
          sidebar={this.sidebarLinks}
          sidebarClassName="navbar"
          contentClassName="content"
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          shadow={false}
        >
          {!this.state.sidebarDocked ? (
            <button onClick={() => this.onSetSidebarOpen(true)}>
              <MenuIcon style={{ color: "white" }} />
            </button>
          ) : (
            undefined
          )}

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
        </Sidebar>
      </Router>
    );
  }
}
