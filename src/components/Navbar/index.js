import React from "react";
import ScoreCard from "./ScoreCard";
import "./style.css";

// --- JSX curly braces to evaluate the style object on the JSX tag

class Navbar extends Component {
    constructor(scores) {
        super(scores);
        this.state = {
            score = 0,
            topScore = 0
        }
    }


export default Navbar;