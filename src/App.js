import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Card from "./components/Card/Card";
import Main from "./components/Main/Main";

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
                <Navbar />
                <Jumbotron />

                {this.state.myCards.forEach(picture => (
                    <Card
                        isClicked={this.isClicked}
                        id={picture.id}
                        image={picture.image}
                    />
                ))}
            </Main>
        );
    }
}

// function App() {
//     return (
//         <div>
//             <Navbar />
//             <Jumbotron />
//             <Card />
//         </div>
//     );
// }

export default App;
