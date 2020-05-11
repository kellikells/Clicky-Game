import React from "react";
import "./style.css";


// --- JSX curly braces to evaluate the style object on the JSX tag
function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Clicky Game</a></li>
                <li>Click an image to begin!</li>
                <li>
                    Score: 0 | Top Score: 0
                </li>
            </ul>
        </nav>
    );
}


export default Navbar;