import "./App.scss";
import React from "react";
import UpperDecoration from "./components/UpperDecoration/UpperDecoration";
import TopMenu from "./components/Complicated/TopMenu/TopMenu";

const App : React.FC = () => {
    return(
        <React.Fragment>
            <UpperDecoration/>

            <TopMenu className="TopMenu"/>

       </React.Fragment>
    );
}

export default App;