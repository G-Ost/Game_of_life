function Button(props) {
    if (props.buttonType === "start") {
        return <button className="buttons" id="startButton" onClick={() => props.onClickFunction("start")} style={{ left: props.left, top: props.top, width: props.width, height: props.height, fontSize: props.fontSize, borderWidth: props.fontSize / 12 }}>Start!</button>
    }
    else if (props.buttonType === "stop") {
        return <button className="buttons" id="stopButton" onClick={() => props.onClickFunction("stop")} style={{ left: props.left, top: props.top, width: props.width, height: props.height, fontSize: props.fontSize, borderWidth: props.fontSize / 12 }}>Stop</button>
    }
    else {
        return <button className="buttons" id="resetButton" onClick={() => props.onClickFunction("reset")} style={{ left: props.left, top: props.top, width: props.width, height: props.height, fontSize: props.fontSize, borderWidth: props.fontSize / 12 }}>Reset</button>
    }
}
export default Button;