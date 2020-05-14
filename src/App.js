import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Main from "./components/Main";

import myCards from "./myCards.json";

// ===== Setting the State to the myCards array (line 8) =====
//       this.state.myCards
// ----- this allows for CONDITIONAL RENDERING ---------------
// class App extends Component {
//     constructor(myCards) {
//         super(myCards);
//         this.state = {
//         }
//     }
class App extends Component {
    state = {
        myCards
    };

    // ======== FUNCTION for click on any ImageCard =========
    handleClick = () => {
        if (!this.state.clicked) {
            console.log(`it was not clicked before`);
                this.setState({ clicked: false })
        } else {
            console.log(`2nd time getting clicked`);
        }
    }

    // =========== RENDER & RETURN the components ===========
    // ----- randomly displays each ImageCard -----
    render() {
        return (
            <Main>
                <Jumbotron />
                <Navbar />


                {this.state.myCards.map((thisCard) => (
                    <ImageCard 
                     handleClick={this.handleClick}
                     id={thisCard.id}
                     key={thisCard.id}
                     image={thisCard.image}
                     clicked={thisCard.clicked}
                     />
                ))}
            </Main>
        );
    }
}

export default App;
