import React from "react";

const Box = (props) => {
    const styles = {
        background: props.color,
        width: "200px"
    }
    return(
        <div style={styles}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <p>{props.info}</p>
        </div>
    )
}
export default Box