import "./App.scss";
import React from "react";
import logo from "./components/img/logo.png";
import DButton from "./components/button/button";
import TopPanel from "./components/topPanel/topPanel";

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <TopPanel/>
                <div className = "mainPanel">
                    <div className = "mainButtonsContainer">
                        <img id = "logo" src = {logo}></img>
                        <DButton isBold = {true} text = "главная"/>
                        <DButton isBold = {true} text = "о школе"/>
                        <DButton isBold = {true} text = "контакты"/>
                        <DButton isBold = {true} text = "ГИА"/>
                        <DButton isBold = {true} text = "аттестация"/>
                        <DButton isBold = {true} text = "ШЮМ"/>
                        <DButton isBold = {true} text = "фото"/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default App;