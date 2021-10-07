import React from 'react';
import './SideMenuStyle.scss';
import SideButton from '../../Buttons/SideButton';

type Props = {
    className : string,
    selectedIndex? : number
};

const SideMenu : React.FC<Props> = (props : Props) => {
    return(
        <React.Fragment>
            <div className={`SideMenu ${props.className}`}>
                <SideButton selected={props.selectedIndex === 7} className="SideMenuButton" text="Расписание кружков"></SideButton>
                <SideButton selected={props.selectedIndex === 8} className="SideMenuButton" text="Дайте, пожалуйста, задачу"></SideButton>
                <SideButton selected={props.selectedIndex === 9} className="SideMenuButton" text="Олимпиады"></SideButton>
                <SideButton selected={props.selectedIndex === 10} className="SideMenuButton" text="Клуб друзей"></SideButton>
                <SideButton selected={props.selectedIndex === 11} className="SideMenuButton" text="Официальный сайт"></SideButton>
                <SideButton selected={props.selectedIndex === 12} className="SideMenuButton" text="Газета ШОР"></SideButton>
                <SideButton selected={props.selectedIndex === 13} className="SideMenuButton" text="План школы"></SideButton>
                <SideButton selected={props.selectedIndex === 14} className="SideMenuButton" text="О сайте"></SideButton>
            </div>
        </React.Fragment>
    );
};

export default SideMenu;