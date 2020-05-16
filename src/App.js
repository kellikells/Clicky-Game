import React, { Component } from "react";
// import ScoreCard from "./components/ScoreCard";
// import Navbar from "./components/Navbar";
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
        myCards,
        score: 0
    };
    

    

    // ======== FUNCTION for click on any ImageCard =========
    handleClick = () => {
        if (!this.state.clicked) {
            console.log(`it was not clicked before`);
            // score++;
                this.setState({ clicked: true, score: this.state.score+1})
        } else {
            this.setState({score:0})
            console.log(`you CLICKED ME ALREADY`);
                
        }
    }


    // =========== RENDER & RETURN the components ===========
    // ----- randomly displays each ImageCard -----
    render() {
        return (
            <Main>
                <Jumbotron />
                <nav className="navbar">
                    <ul>
                        <li><a href="/">Clicky Game</a></li>
                        <li>Click an image to begin!</li>
                        <li>
                            score: {this.state.score}
                        </li>


                 
                    </ul>
                </nav>

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
