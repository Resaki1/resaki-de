import React from "react";
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
    <nav className="navigation">
      <h2>Resaki Fotografie</h2>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#astro">Astrofotografie</a>
        </li>
        <li>
          <a href="#Landscape">Landschaftsfotografie</a>
        </li>
        <li>
          <a href="#timelapse">Zeitraffer</a>
        </li>
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#gear">Ausrüstung</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );

  render() {
    return (
      <Sidebar
        sidebar={this.sidebarLinks}
        sidebarClassName="navbar"
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        shadow={false}
        styles={{
          root: { zIndex: "999", position: "fixed" },
          sidebar: { zIndex: "3" },
          overlay: { zIndex: "2" }
        }}
      >
        {!this.state.sidebarDocked ? (
          <button
            className="menuButton"
            onClick={() => this.onSetSidebarOpen(true)}
          >
            <MenuIcon style={{ color: "#00826c" }} titleAccess="meaning" />
          </button>
        ) : (
          undefined
        )}
      </Sidebar>
    );
  }
}
