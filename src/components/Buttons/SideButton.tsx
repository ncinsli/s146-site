import React from "react";
import "./SideButtonStyle.scss";

type Props = {
    text : string, 
    className? : string
    onClick? : () => void,
    selected? : boolean
}

const SideButton : React.FC<Props> = (props : Props) => {
    console.log(props.selected);
    return(
        <React.Fragment>
            <button onClick = { () => props.onClick === undefined ? null : props.onClick() } 
                className = { `${!props.selected ? `designedSideButton ${props.className}` : `designedSideButtonFocused ${props.className}`} ${props.className}`}>{props.text}</button>
        </React.Fragment>
    );
    
}

export default SideButton;