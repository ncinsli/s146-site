import React from 'react';
import './TopMenuStyle.scss';
import Logo from '../../Logo/Logo';
import TopButton from '../../Buttons/TopButton';
import { Router } from 'react-router';
import { useHistory } from 'react-router';

type Props = {
    className : string,
    selectedRoute : string
};

const TopMenu : React.FC<Props> = (props : Props) => {
    const history = useHistory();

    return(
        <React.Fragment>
            <div className={`TopMenu ${props.className}`}>    
                <Logo className="Logo146"></Logo>
                <div className="TopMenuButtonsDiv">
                    <TopButton focused={props.selectedRoute === 'home'} onClick={() => history.push("/")} className="TopMenuButton" text="Главная"></TopButton>
                    <TopButton focused={props.selectedRoute === 'about'} onClick={() => history.push("/about")} className="TopMenuButton" text="О школе"></TopButton>
                    <TopButton focused={props.selectedRoute === 'contacts'} onClick={() => history.push("/contacts")} className="TopMenuButton" text="Контакты"></TopButton>
                    <TopButton focused={props.selectedRoute === 'shum'} onClick={() => history.push("/shum")} className="TopMenuButton" text="ШЮМ"></TopButton>
                    <TopButton focused={props.selectedRoute === 'staff'} onClick={() => history.push("/staff")} className="TopMenuButton" text="Состав"></TopButton>
                    <TopButton focused={props.selectedRoute === 'photos'} onClick={() => history.push("/photos")} className="TopMenuButton" text="Фото"></TopButton>
                    <TopButton focused={props.selectedRoute === 's146'} onClick={() => {window.open('http://s146.ru/'); return null;}} className="TopMenuButton" text="Офиц. сайт"></TopButton>
                </div>
            </div>
        </React.Fragment>
    );
};
//<TopButton focused={props.selectedIndex === 4} onClick={() => history.push("/interviews")} className="TopMenuButton" text="Интервью"></TopButton>
export default TopMenu;