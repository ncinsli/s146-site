import "./App.scss";
import React from "react";
import logo from "./components/img/logo.png";
import DButton from "./components/button/button";
import {Carousel} from "react-responsive-carousel";
import TopPanel from "./components/topPanel/topPanel";
import SidePanel from "./components/sidePanel/sidePanel";
import EventCard from "./components/eventCard/eventCard";
import {observable} from "mobx";
class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <TopPanel/>
                <div className = "mainPanel">
                    <div className = "mainButtonsContainer">
                        <img id = "logo" src = {logo}></img>
                        <span className = "titleButton"> <DButton isBold = {true} fontSize = {1.5} text = "главная"/> </span>
                        <span className = "titleButton"> <DButton isBold = {true} fontSize = {1.5} text = "о школе"/> </span>
                        <span className = "titleButton"> <DButton isBold = {true} fontSize = {1.5} text = "контакты"/> </span>
                        <span className = "titleButton"> <DButton isBold = {true} fontSize = {1.5} text = "ГИА"/> </span>
                        <span className = "titleButton"> <DButton isBold = {true} fontSize = {1.5} text = "аттестация"/> </span>
                        <span className = "titleButton"> <DButton isBold = {true} fontSize = {1.5} text = "ШЮМ"/> </span>
                        <span className = "titleButton"> <DButton isBold = {true} fontSize = {1.5} text = "фото"/> </span>
                    </div>

                    <br></br><br></br>
                    <div className = "horizontalElements">
                        <SidePanel/>
                        <div className = "cardList">
                                <div> <EventCard main = "АААА КРОКОДИЛЫ БЕГЕМОТЫ" title = "Заголовок 1" picturePath = "../components/img/logo.png"/> </div>
                                <div> <EventCard main = "АААА ОБЕЗЬЯНА КАШАЛОТЫ" title = "Заголовок 2" picturePath = "../components/img/logo.png"/> </div>
                                <div> <EventCard main = "АААА И ЗЕ" title = "Заголовок 2" picturePath = "../components/img/logo.png"/> </div>
                                <div> <EventCard main = "ЛЁНЫЙ ПОПУГАЙ" title = "Заголовок 3" picturePath = "../components/img/logo.png"/> </div>
                        </div> 
                            <div>

                            </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}


export default App;