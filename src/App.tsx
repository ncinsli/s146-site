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
        </React.Fragment>
    );
}

export default App;