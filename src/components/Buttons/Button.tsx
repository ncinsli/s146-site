import React from "react";
import "./ButtonStyle.scss";

type Props = {
    text : string, 
    className? : string,
    onClick? : () => void
}

const Button : React.FC<Props> = (props : Props) => {
    return(
        <React.Fragment>
            <button onClick = { () => props.onClick === undefined ? null : props.onClick() } className = {`designedButton ${props.className}`}> {props.text} </button>
        </React.Fragment>
    );
    
}

export default Button;