import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Main from "./components/Main";

import myCards from "./myCards.json";

class App extends Component {

    // --- setting this.state.myCards to the myCards json array
    state = {
        myCards
    };

    // --- change property of clicked 
    // isClicked =

    // --- forEach: render a Card component for each myCard object
    render() {
        return (
            <Main>
                {/* <Navbar />
                <Jumbotron /> */}
                <Navbar></Navbar>
                <Jumbotron></Jumbotron>

                {/* {this.state.myCards.forEach(picture => ( */}
                {myCards.forEach(picture => (
                    <ImageCard
                        // isClicked={this.isClicked}
                        id={picture.id}
                        image={picture.image}
                    />
                ))}
            </Main>
        );
    }
}

export default App;
