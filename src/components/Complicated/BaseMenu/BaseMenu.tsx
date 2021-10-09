import './BaseMenu.scss';
import React, { useEffect, useState } from 'react';
import SideMenu from '../SideMenu/SideMenu';
import TopMenu from '../TopMenu/TopMenu';

const BaseMenu : React.FC = () => {
    const [selectedRoute, setSelectedRoute] = useState<string>("");
    return(
        <React.Fragment>
            <TopMenu selectedRoute={selectedRoute} updateSelection={setSelectedRoute} className="TopMenu"/>
            <SideMenu selectedRoute={selectedRoute} updateSelection={setSelectedRoute} className="SideMenu"/>            
        </React.Fragment>
    );
};

export default BaseMenu;