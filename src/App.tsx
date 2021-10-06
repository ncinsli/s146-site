import "./App.scss";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";

const App : React.FC = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;