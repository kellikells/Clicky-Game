import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Main from "./components/Main";

import myCards from "./myCards.json";

// ===== Setting the State to the myCards array (line 8) =====
//       this.state.myCards
// ----- this allows for CONDITIONAL RENDERING ---------------
class App extends Component {
    state = {
        myCards
    };

    // ===== onClick function 
    


    // ===== RENDER: using the map method, and   =====
    render() {


        // ===== RETURN : the components
        return (
            <Main>
                <Jumbotron />
                <Navbar />


                {myCards.map(picture => (
                    <ImageCard picture={picture} />
                ))}
            </Main>
        );


    }

    export default App;
