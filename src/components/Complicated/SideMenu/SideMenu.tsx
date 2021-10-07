import React from 'react';
import './SideMenuStyle.scss';
import SideButton from '../../Buttons/SideButton';

type Props = {
    className : string
};

const SideMenu : React.FC<Props> = (props : Props) => {
    return(
        <React.Fragment>
            <div className={`SideMenu ${props.className}`}>
                <SideButton className="SideMenuButton" text="Расписание кружков"></SideButton>
                <SideButton className="SideMenuButton" text="Дайте, пожалуйста, задачу"></SideButton>
                <SideButton className="SideMenuButton" text="Олимпиады"></SideButton>
                <SideButton className="SideMenuButton" text="Клуб друзей"></SideButton>
                <SideButton className="SideMenuButton" text="Официальный сайт"></SideButton>
                <SideButton className="SideMenuButton" text="Газета ШОР"></SideButton>
                <SideButton className="SideMenuButton" text="План школы"></SideButton>
                <SideButton className="SideMenuButton" text="О сайте"></SideButton>
            </div>
        </React.Fragment>
    );
};

export default SideMenu;