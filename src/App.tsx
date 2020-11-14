import React from "react";
import DButton from "./components/button/button";
import "./App.scss";
import logo from "./components/img/logo.png";

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = "topPanel"><p className = "hidden">f</p></div>
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

            </React.Fragment>
        );
    }
}

export default App;