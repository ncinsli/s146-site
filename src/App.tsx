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
import Article from "./components/Complicated/Article/Article";
import ArticleView from "./pages/ArticleView";

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

                <Route exact path="/article">
                    <ArticleView />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;