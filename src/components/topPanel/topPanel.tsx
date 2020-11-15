import React from "react";
import "./topPanelStyle.scss";
import bits from "./bits.png";
import atom from "./atom.png"

class TopPanel extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = "topPanel">
                    <img className = "randomScalingDecorations" src = {atom}/>
                    <img className = "randomDecorations" src = {bits}/>
                    <p className = "hidden">заполнитель на случай, если уйдут все картинки</p> { /* заполнитель */ }
                </div>
            </React.Fragment>
        );
    }
}

export default TopPanel;