import React from "react";
import "./ButtonStyle.scss";

type Props = {
    text : string, 
    className? : string
}

const Button : React.FC<Props> = (props : Props) => {
    return(
        <React.Fragment>
            <button className = "designedButton">
                <p className = "buttonText">{props.text}</p>
            </button>
        </React.Fragment>
    );
    
}

export default Button;