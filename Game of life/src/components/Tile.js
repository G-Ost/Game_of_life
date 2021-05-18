import React from "react";
// import image from "./block.png";

function Tile(props) {

    let squareSize = props.squareSize
    squareSize = squareSize + "px";
    // return <svg width={squareSize} height={squareSize} >
    //     <rect width={squareSize} height={squareSize} className={props.isBorder ? "borderTile" : "movementTile"} />
    // </svg>


    if (props.blockType === "border") {
        // return <span width={squareSize} height={squareSize}  >
        //     <img src={image} alt="block" width={squareSize} height={squareSize} className="borderTile"></img>
        // </span>
        return <svg width={squareSize} height={squareSize} >
            <rect width={squareSize} height={squareSize} className={"borderTile"} />
        </svg>
    }
    else {
        return <svg width={squareSize} height={squareSize} >
            <rect width={squareSize} height={squareSize} className="noLifeTile" />
        </svg>
    }
}

export default Tile;