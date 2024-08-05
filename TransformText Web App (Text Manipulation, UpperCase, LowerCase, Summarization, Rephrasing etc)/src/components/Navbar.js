import React from "react";
import "../App.css";

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark text-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand h5 pl-4 font-weight-bold" href="/">
            TransfromText
          </a>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label h6"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
