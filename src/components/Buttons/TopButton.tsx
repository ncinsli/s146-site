import React from "react";
import "./TopButtonStyle.scss";
type Props = {
    text : string, 
    className? : string
}

const TopButton : React.FC<Props> = (props : Props) => {
    return(
        <React.Fragment>
            <button className = {`designedTopButton ${props.className}`}>
                <p className = "buttonText">{props.text}</p>
            </button>
        </React.Fragment>
    );
    
}

export default TopButton;