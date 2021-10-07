import React from 'react';
import { GlobalState } from '../../../services/GlobalState';
import SideMenu from '../SideMenu/SideMenu';
import TopMenu from '../TopMenu/TopMenu';
import './BaseMenu.scss';

type Props = {

}

const BaseMenu : React.FC<Props> = (props : Props) => { 
    return(
        <React.Fragment>
            <TopMenu className="TopMenu" selectedIndex={GlobalState.selectionId}/>
            <SideMenu className="SideMenu" selectedIndex={GlobalState.selectionId}/>
        </React.Fragment>
    );
}

export default BaseMenu;