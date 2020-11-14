import React from "react";
import DButton from "./components/button/button";
import "./App.scss";

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = "mainButtonsContainer">
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