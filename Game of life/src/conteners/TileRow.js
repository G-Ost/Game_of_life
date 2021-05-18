import Tile from "../components/Tile"
import React from "react";
function TileRow(props) {
    const squareSize = props.squareSize;
    let width = squareSize * props.boardRow.length + "px";
    let height = squareSize + "px";
    return (
        <>
            <div className="tileRow" style={{ width: width, height: height }}>
                {props.boardRow.map((val, index) => {
                    if (val === "X") {
                        return (
                            <Tile squareSize={squareSize} key={"Tile" + index.toString()} blockType={"border"}></Tile>
                        )
                    }
                    else {
                        return (
                            <Tile squareSize={squareSize} key={"Tile" + index.toString()} blockType={"movement"}></Tile>
                        )
                    }
                })}
            </div>

        </>
    )
}


export default TileRow;