import React from "react";
import "./ButtonStyle.scss";

type Props = {
    text : string, 
    className? : string
}

const Button : React.FC<Props> = (props : Props) => {
    return(
        <React.Fragment>
            <button className = {`designedButton ${props.className}`}> {props.text} </button>
        </React.Fragment>
    );
    
}

export default Button;