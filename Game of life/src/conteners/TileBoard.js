import TileRow from "./TileRow"
import React from "react";
function TileBoard(props) {
    let board = props.board;
    return (
        <>
            <div className="tileBoard" >
                {board.map((value, index) => {
                    return <TileRow squareSize={props.squareSize} rowIndex={index} boardRow={value} key={"boardRow" + index.toString()}></TileRow>
                })}
            </div>

        </>
    )
}

export default TileBoard;