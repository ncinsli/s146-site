import React from 'react';
import './TopMenuStyle.scss';
import Logo from '../../Logo/Logo';
import TopButton from '../../Buttons/TopButton';
import { Router } from 'react-router';
import { useHistory } from 'react-router';

type Props = {
    className : string
};

const TopMenu : React.FC<Props> = (props : Props) => {
    const history = useHistory();

    return(
        <React.Fragment>
            <div className={`TopMenu ${props.className}`}>    
                <Logo className="Logo146"></Logo>
                <div className="TopMenuButtonsDiv">
                    <TopButton onClick={() => history.push("/")} className="TopMenuButton" text="Главная"></TopButton>
                    <TopButton onClick={() => history.push("/about")} className="TopMenuButton" text="О школе"></TopButton>
                    <TopButton onClick={() => history.push("/contacts")} className="TopMenuButton" text="Контакты"></TopButton>
                    <TopButton onClick={() => history.push("/shum")} className="TopMenuButton" text="ШЮМ"></TopButton>
                    <TopButton onClick={() => history.push("/interviews")} className="TopMenuButton" text="Интервью"></TopButton>
                    <TopButton onClick={() => history.push("/staff")} className="TopMenuButton" text="Состав"></TopButton>
                    <TopButton onClick={() => history.push("/photos")} className="TopMenuButton" text="Фото"></TopButton>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TopMenu;