import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './SideMenuStyle.scss';
import SideButton from '../../Buttons/SideButton';
import { useHistory } from 'react-router';

type Props = {
    className : string,
    selectedRoute : string,
    updateSelection : Dispatch<SetStateAction<string>>
};

const SideMenu : React.FC<Props> = (props : Props) => {
    const history = useHistory();
    const [trigger, doTrigger] = useState();

    return(
        <React.Fragment>
            <div className={`SideMenu ${props.className}`}>
                <SideButton focused={props.selectedRoute === 'facultyTimetable'} onClick={() => {props.updateSelection(""); history.push("/facultyTimetable") }} className="SideMenuButton" text="Расписание кружков"></SideButton>
                <SideButton focused={props.selectedRoute === 'giveMeTask'} onClick={() => {props.updateSelection("giveMeTask"); history.push("/giveMeTask")}} className="SideMenuButton" text="Дайте, пожалуйста, задачу"></SideButton>
                <SideButton focused={props.selectedRoute === 'olimpiads'} onClick={() => {props.updateSelection("olimpiads"); history.push("/olimpiads")}} className="SideMenuButton" text="Олимпиады"></SideButton>
                <SideButton focused={props.selectedRoute === 'club146'} onClick={() => {props.updateSelection("club146"); history.push("/club146")}} className="SideMenuButton" text="Клуб друзей"></SideButton>
                <SideButton focused={props.selectedRoute === 'interviews'} onClick={() => {props.updateSelection("interviews"); history.push("/interviews")}} className="SideMenuButton" text="Интервью"></SideButton>
                <SideButton focused={props.selectedRoute === 'schoolNewspapers'} onClick={() => {props.updateSelection("schoolNewspapers"); history.push("/schoolNewspapers")}} className="SideMenuButton" text="Газета ШОР"></SideButton>
                <SideButton focused={props.selectedRoute === 'schoolPlan'} onClick={() => {props.updateSelection("schoolPlan"); history.push("/schoolPlan")}} className="SideMenuButton" text="План школы"></SideButton>
                <SideButton focused={props.selectedRoute === 'aboutWebsite'} onClick={() => {props.updateSelection("aboutWebsite"); history.push("/aboutWebsite")}} className="SideMenuButton" text="О сайте"></SideButton>
            </div>
        </React.Fragment>
    );
};

export default SideMenu;