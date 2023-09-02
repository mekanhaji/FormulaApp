import React from "react";
import "./Navbar.css";
export const Navbar = ({ changeTheme }) => {
    return (
        <nav className={"navbar"}>
            <div className="navbar-title">Formula App</div>
            <div className="theme-toggle-button">created by KanhaJI</div>
        </nav>
    );
};
