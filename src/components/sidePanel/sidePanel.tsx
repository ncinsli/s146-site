import React from "react";
import "./sidePanelStyle.scss";
import TallButton from "../tallButton/tallButton";

class SidePanel extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = "sidePanel">
                    <span className = "row">
                        <TallButton fontSize = {1.7} text = "Организации" isBold = {true}></TallButton>
                        <TallButton fontSize = {1.7} text = "Карта раздела" isBold = {true}></TallButton>
                    </span>
                    <span className = "row">
                        <TallButton fontSize = {1.7} text = "Основные сведения" isBold = {true}></TallButton>
                        <TallButton fontSize = {1.4} text = "Структура и органы управления обр. орг." isBold = {true}></TallButton>
                    </span>
                    <span className = "row">
                        <TallButton fontSize = {1.6} text = "Документы (Выс. кнопка)" isBold = {true}></TallButton>
                        <TallButton fontSize = {1.7} text = "Образование" isBold = {true}></TallButton>
                    </span>
                    <span className = "row">
                        <TallButton fontSize = {1.4} text = "Образовательные стандарты" isBold = {true}></TallButton>
                        <TallButton fontSize = {1.5} text = "Руководство. Педагогический состав" isBold = {true}></TallButton>
                    </span>
                </div>
            </React.Fragment>
        );
    }
}

export default SidePanel;