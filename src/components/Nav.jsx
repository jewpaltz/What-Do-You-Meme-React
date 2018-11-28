import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/play">Play</NavLink>
        </li>
    </ul>
    </nav>
)