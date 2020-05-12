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
        
                <img alt={props.picture.id} src={props.picture.image} key={props.picture.id} />
        
        </div>
    );
}

export default ImageCard;