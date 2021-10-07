import React from "react";
import "./TopButtonStyle.scss";
type Props = {
    text : string, 
    className? : string,
    onClick? : () => void,
    selected? : boolean
}

const TopButton : React.FC<Props> = (props : Props) => {
    return(
        <React.Fragment>
            <button onClick = { () => props.onClick === undefined ? null : props.onClick() } className = { `${!props.selected ? "designedTopButton" : "designedTopButtonFocued"} ${props.className}`}>
                <p className = "buttonText">{props.text}</p>
            </button>
        </React.Fragment>
    );
    
}

export default TopButton;