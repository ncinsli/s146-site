import React from "react";
import "./topPanelStyle.scss";
import bits from "./bits.png";
import atom from "./atom.png"
import { Parallax, Background } from 'react-parallax';

class TopPanel extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = "topPanel">
                    <Parallax strength = {200}>
                        <img className = "randomDecorations" src = {atom}/>
                        <img className = "randomDecorations" src = {bits}/>
                    </Parallax>
                    <p className = "hidden">заполнитель на случай, если уйдут все картинки</p> { /* заполнитель */ }
                </div>
            </React.Fragment>
        );
    }
}

export default TopPanel;