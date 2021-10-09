import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './TopMenuStyle.scss';
import Logo from '../../Logo/Logo';
import TopButton from '../../Buttons/TopButton';
import { Router } from 'react-router';
import { useHistory } from 'react-router';

type Props = {
    className : string,
    selectedRoute : string
    updateSelection : Dispatch<SetStateAction<string>>
};

const TopMenu : React.FC<Props> = (props : Props) => {
    const history = useHistory();

    return(
        <React.Fragment>
            <div className={`TopMenu ${props.className}`}>    
                <Logo className="Logo146"/>

                <div className="TopMenuButtonsDiv">
                    <TopButton focused={props.selectedRoute === ''} onClick={() => { history.push("/"); props.updateSelection("")}} className="TopMenuButton" text="Главная"></TopButton>
                    <TopButton focused={props.selectedRoute === 'about'} onClick={() => { history.push("/about"); props.updateSelection("about")}} className="TopMenuButton" text="О школе"></TopButton>
                    <TopButton focused={props.selectedRoute === 'contacts'} onClick={() => { history.push("/contacts"); props.updateSelection("contacts") }} className="TopMenuButton" text="Контакты"></TopButton>
                    <TopButton focused={props.selectedRoute === 'shum'} onClick={() => { history.push("/shum"); props.updateSelection("shum") }} className="TopMenuButton" text="ШЮМ"></TopButton>
                    <TopButton focused={props.selectedRoute === 'staff'} onClick={() => { history.push("/staff"); props.updateSelection("staff")}} className="TopMenuButton" text="Состав"></TopButton>
                    <TopButton focused={props.selectedRoute === 'photos'} onClick={() => { history.push("/photos"); props.updateSelection("photos")}} className="TopMenuButton" text="Фото"></TopButton>
                    <TopButton focused={props.selectedRoute === 's146'} onClick={() => {window.open('http://s146.ru/'); return null;}} className="TopMenuButton" text="Офиц. сайт"></TopButton>
                </div>
            </div>
        </React.Fragment>
    );
};
//<TopButton focused={props.selectedIndex === 4} onClick={() => history.push("/interviews")} className="TopMenuButton" text="Интервью"></TopButton>
export default TopMenu;