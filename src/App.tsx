import "./App.scss";
import React from "react";
import Button from "./components/Buttons/Button";
import TopButton from "./components/Buttons/TopButton";
import {Carousel} from "react-responsive-carousel";
import {observable} from "mobx";
import SideButton from "./components/Buttons/SideButton";
import Logo from "./components/Logo/Logo";
import UpperDecoration from "./components/UpperDecoration/UpperDecoration";
import ArticleCard from "./components/Articles/ArticleCard";

const App : React.FC = () => {
    return(
        <React.Fragment>
            <UpperDecoration/>
            <Logo/>
            <TopButton className="TopButton" text="Top button"></TopButton>
            <Button text="Button"></Button>
            <SideButton text="Side button"></SideButton>
            <ArticleCard title="ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок" subTitle="подзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовокподзаголовок" photo=""></ArticleCard>
        
            <ArticleCard title="Мишу Манжелевского признали всеросником" subTitle="ха, обманули" photo = "https://sun9-22.userapi.com/impf/c851320/v851320743/19e117/v0h0x07Ue5M.jpg?size=1920x1272&quality=96&sign=9916937fa55aebfef3857ed92352f028&type=album"></ArticleCard>
        </React.Fragment>
    );
}

export default App;