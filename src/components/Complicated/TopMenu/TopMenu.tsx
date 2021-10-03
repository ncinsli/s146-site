import React from 'react';
import './TopMenuStyle.scss';
import Logo from '../../Logo/Logo';
import TopButton from '../../Buttons/TopButton';

type Props = {
    className : string
};

const TopMenu : React.FC<Props> = (props : Props) => {
    return(
        <React.Fragment>
            <div className={`TopMenu ${props.className}`}>    
                <Logo className="Logo146"></Logo>
                <div className="TopMenuButtonsDiv">
                    <TopButton className="TopMenuButton" text="Новости"></TopButton>
                    <TopButton className="TopMenuButton" text="О школе"></TopButton>
                    <TopButton className="TopMenuButton" text="Контакты"></TopButton>
                    <TopButton className="TopMenuButton" text="ШЮМ"></TopButton>
                    <TopButton className="TopMenuButton" text="Интервью"></TopButton>
                    <TopButton className="TopMenuButton" text="Состав"></TopButton>
                    <TopButton className="TopMenuButton" text="Фото"></TopButton>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TopMenu;