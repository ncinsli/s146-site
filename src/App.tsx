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
import TopMenu from "./components/Complicated/TopMenu/TopMenu";

const App : React.FC = () => {
    return(
        <React.Fragment>
            <UpperDecoration/>

            <TopMenu className="TopMenubar"/>

       </React.Fragment>
    );
}

export default App;