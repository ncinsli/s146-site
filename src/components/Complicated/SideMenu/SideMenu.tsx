import React from 'react';
import './SideMenuStyle.scss';
import SideButton from '../../Buttons/SideButton';
import { useHistory } from 'react-router';

type Props = {
    className : string,
    selectedIndex : string
};

const SideMenu : React.FC<Props> = (props : Props) => {
    const history = useHistory();
    return(
        <React.Fragment>
            <div className={`SideMenu ${props.className}`}>
                <SideButton focused={props.selectedIndex === 'home'} onClick={() => history.push("/")} className="SideMenuButton" text="Расписание кружков"></SideButton>
                <SideButton focused={props.selectedIndex === 'home'} onClick={() => history.push("/")} className="SideMenuButton" text="Дайте, пожалуйста, задачу"></SideButton>
                <SideButton focused={props.selectedIndex === 'home'} onClick={() => history.push("/")} className="SideMenuButton" text="Олимпиады"></SideButton>
                <SideButton focused={props.selectedIndex === 'home'} onClick={() => history.push("/")} className="SideMenuButton" text="Клуб друзей"></SideButton>
                <SideButton focused={props.selectedIndex === 'home'} onClick={() => history.push("/")} className="SideMenuButton" text="Интервью"></SideButton>
                <SideButton focused={props.selectedIndex === 'home'} onClick={() => history.push("/")} className="SideMenuButton" text="Газета ШОР"></SideButton>
                <SideButton focused={props.selectedIndex === 'home'} onClick={() => history.push("/")} className="SideMenuButton" text="План школы"></SideButton>
                <SideButton focused={props.selectedIndex === 'home'} onClick={() => history.push("/")} className="SideMenuButton" text="О сайте"></SideButton>
            </div>
        </React.Fragment>
    );
};

export default SideMenu;