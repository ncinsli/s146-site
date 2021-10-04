import React from 'react';
import './SideMenuStyle.scss';
import SideButton from '../../Buttons/SideButton';

type Props = {
    className : string
};

const SideMenu : React.FC<Props> = (props : Props) => {
    return(
        <React.Fragment>
            <div className={`LeftMenu ${props.className}`}>
                <SideButton className="LeftMenuButton" text="Расписание кружков"></SideButton>
                <SideButton className="LeftMenuButton" text="Дайте, пожалуйста, задачу"></SideButton>
                <SideButton className="LeftMenuButton" text="Олимпиады"></SideButton>
                <SideButton className="LeftMenuButton" text="Клуб друзей"></SideButton>
                <SideButton className="LeftMenuButton" text="Официальный сайт"></SideButton>
                <SideButton className="LeftMenuButton" text="Газета ШОР"></SideButton>
                <SideButton className="LeftMenuButton" text="План школы"></SideButton>
                <SideButton className="LeftMenuButton" text="О сайте"></SideButton>
            </div>
        </React.Fragment>
    );
};

export default SideMenu;