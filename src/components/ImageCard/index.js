import React from "react";
import "./style.css";

// const ImageCard = () => (
//     <div className="oneCard">
//         <div className="img-container">
//             <img alt={this.id} src={this.image} />
//         </div>
//     </div>
// );

function ImageCard(props) {
    return (
        <div className="oneCard">
            <div className="img-container">
                <img alt={props.id} src={props.image} key={props.id} />
            </div>
        </div>
    );
}

export default ImageCard;