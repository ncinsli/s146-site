import React from "react";
import "./SideButtonStyle.scss";
type Props = {
    text : string, 
    className? : string
    onClick? : () => void
}

const SideButton : React.FC<Props> = (props : Props) => {
    return(
        <React.Fragment>
            <button onClick = { () => props.onClick === undefined ? null : props.onClick() } className = {`designedSideButton ${props.className}`}>{props.text}</button>
        </React.Fragment>
    );
    
}

export default SideButton;