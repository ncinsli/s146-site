import React from 'react';
import './SideMenuStyle.scss';
import SideButton from '../../Buttons/SideButton';
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

const SideMenu : React.FC<Props> = (props : Props) => {
    const history = useHistory();
    return(
        <React.Fragment>
            <Router>
                <div className={`SideMenu ${props.className}`}>
                    <SideButton focused={props.selectedRoute === 'facultyTimetable'} onClick={() => history.push("/facultyTimetable")} className="SideMenuButton" text="Расписание кружков"></SideButton>
                    <SideButton focused={props.selectedRoute === 'giveMeTask'} onClick={() => history.push("/giveMeTask")} className="SideMenuButton" text="Дайте, пожалуйста, задачу"></SideButton>
                    <SideButton focused={props.selectedRoute === 'olimpiads'} onClick={() => history.push("/olimpiads")} className="SideMenuButton" text="Олимпиады"></SideButton>
                    <SideButton focused={props.selectedRoute === 'club146'} onClick={() => history.push("/club146")} className="SideMenuButton" text="Клуб друзей"></SideButton>
                    <SideButton focused={props.selectedRoute === 'interviews'} onClick={() => history.push("/interviews")} className="SideMenuButton" text="Интервью"></SideButton>
                    <SideButton focused={props.selectedRoute === 'schoolNewspapers'} onClick={() => history.push("/schoolNewspapers")} className="SideMenuButton" text="Газета ШОР"></SideButton>
                    <SideButton focused={props.selectedRoute === 'schoolPlan'} onClick={() => history.push("/schoolPlan")} className="SideMenuButton" text="План школы"></SideButton>
                    <SideButton focused={props.selectedRoute === 'aboutWebsite'} onClick={() => history.push("/aboutWebsite")} className="SideMenuButton" text="О сайте"></SideButton>
                </div>
            </Router>
        </React.Fragment>
    );
};

export default SideMenu;