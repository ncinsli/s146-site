import React from 'react';
import './TopMenuStyle.scss';
import Logo from '../../Logo/Logo';
import TopButton from '../../Buttons/TopButton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
  

type Props = {
    className : string,
    selectedRoute : string
};

const TopMenu : React.FC<Props> = (props : Props) => {
    const history = useHistory();

    return(
        <React.Fragment>
            <Router>      
                <div className={`TopMenu ${props.className}`}>    
                    <Logo className="Logo146"></Logo>
                    <div className="TopMenuButtonsDiv">
                        <Link to="/" replace> <TopButton focused={props.selectedRoute === 'home'} onClick={() => {}} className="TopMenuButton" text="Главная"></TopButton></Link>
                        <Link to="/about" replace> <TopButton focused={props.selectedRoute === 'about'} onClick={() => {}} className="TopMenuButton" text="О школе"></TopButton></Link>
                        <Link to="/contacts" replace> <TopButton focused={props.selectedRoute === 'contacts'} onClick={() => {}} className="TopMenuButton" text="Контакты"></TopButton></Link>
                        <Link to="/shum" replace> <TopButton focused={props.selectedRoute === 'shum'} onClick={() => {}} className="TopMenuButton" text="ШЮМ"></TopButton></Link>
                        <Link to="/staff" replace> <TopButton focused={props.selectedRoute === 'staff'} onClick={() => {}} className="TopMenuButton" text="Состав"></TopButton></Link>
                        <Link to="/photos" replace> <TopButton focused={props.selectedRoute === 'photos'} onClick={() => {}} className="TopMenuButton" text="Фото"></TopButton></Link>
                        <TopButton focused={props.selectedRoute === 's146'} onClick={() => {window.open('http://s146.ru/'); return null;}} className="TopMenuButton" text="Офиц. сайт"></TopButton>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    );
};
//<TopButton focused={props.selectedIndex === 4} onClick={() => {}ews")} className="TopMenuButton" text="Интервью"></TopButton>
export default TopMenu;