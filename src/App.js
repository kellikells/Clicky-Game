// import React, { Component } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Main from "./components/Main";
import myCards from "./myCards.json";

console.log(myCards);

function App() {

    // --- putting components together ---
    return (
        <Main>

            <Jumbotron />

            <Navbar />
            {/* ==== map method: used to apply ImageCard component === */}
            {myCards.map(picture => (
                <ImageCard picture={picture} />
            ))}
        </Main>
    );

    // --- setting this.state.myCards to the myCards json array
    // state = {
    //     myCards
    // };

    // --- change property of clicked 
    // isClicked =
}

export default App;
