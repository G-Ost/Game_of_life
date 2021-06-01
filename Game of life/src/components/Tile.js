import React from "react";

function Tile(props) {

    let squareSize = props.squareSize
    squareSize = squareSize + "px";

    if (props.blockType === "border") {
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