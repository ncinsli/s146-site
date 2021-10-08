import React from "react";
import "./SideButtonStyle.scss";
type Props = {
    text : string, 
    className? : string,
    onClick? : () => void,
    focused? : boolean
}

const SideButton : React.FC<Props> = (props : Props) => {
    return(
        <React.Fragment>
            <button onClick = { () => props.onClick === undefined ? null : props.onClick() } className = { `${!props.focused ? "designedSideButton" : "designedSideButtonFocued"} ${props.className}`}>
                <p className = "buttonText">{props.text}</p>
            </button>
        </React.Fragment>
    );
    
}

export default SideButton;