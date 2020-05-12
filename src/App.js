// import React, { Component } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Main from "./components/Main";
import myCards from "./myCards.json";

console.log(myCards);

function App() {

    // --- setting this.state.myCards to the myCards json array
    // state = {
    //     myCards
    // };

    // --- change property of clicked 
    // isClicked =

    return (
        <Main>
            <Navbar />
            <Jumbotron />

            {myCards.forEach(picture => (
                <ImageCard picture={picture} />
            ))}
        </Main>
    );
}


export default App;
