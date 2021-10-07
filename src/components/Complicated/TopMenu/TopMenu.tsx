import React from 'react';
import './TopMenuStyle.scss';
import Logo from '../../Logo/Logo';
import TopButton from '../../Buttons/TopButton';
import { Router } from 'react-router';
import { useHistory } from 'react-router';

type Props = {
    className : string,
    selectedIndex? : number
};

const TopMenu : React.FC<Props> = (props : Props) => {
    const history = useHistory();

    return(
        <React.Fragment>
            <div className={`TopMenu ${props.className}`}>    
                <Logo className="Logo146"></Logo>
                <div className="TopMenuButtonsDiv">
                    <TopButton selected={props.selectedIndex === 0} onClick={() => history.push("/")} className="TopMenuButton" text="Главная"></TopButton>
                    <TopButton selected={props.selectedIndex === 1} onClick={() => history.push("/about")} className="TopMenuButton" text="О школе"></TopButton>
                    <TopButton selected={props.selectedIndex === 2} onClick={() => history.push("/contacts")} className="TopMenuButton" text="Контакты"></TopButton>
                    <TopButton selected={props.selectedIndex === 3} onClick={() => history.push("/shum")} className="TopMenuButton" text="ШЮМ"></TopButton>
                    <TopButton selected={props.selectedIndex === 4} onClick={() => history.push("/interviews")} className="TopMenuButton" text="Интервью"></TopButton>
                    <TopButton selected={props.selectedIndex === 5} onClick={() => history.push("/staff")} className="TopMenuButton" text="Состав"></TopButton>
                    <TopButton selected={props.selectedIndex === 6} onClick={() => history.push("/photos")} className="TopMenuButton" text="Фото"></TopButton>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TopMenu;