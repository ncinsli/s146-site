import React from "react";
import "./SideButtonStyle.scss";
type Props = {
    text : string, 
    className? : string
}

const SideButton : React.FC<Props> = (props : Props) => {
    return(
        <React.Fragment>
            <button className = {`designedSideButton ${props.className}`}>
                <p className = "buttonText">{props.text}</p>
            </button>
        </React.Fragment>
    );
    
}

export default SideButton;