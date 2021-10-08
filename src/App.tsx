import "./App.scss";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './pages/Home/Home';
import ErrorPage from "./pages/ErrorPage";
import Article from "./components/Complicated/Article/Article";
import ArticleView from "./pages/ArticleView/ArticleView";
import StaticArticleView from "./pages/ArticleView/StaticArticleView";


const App : React.FC = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/:urlRoute">
                    <StaticArticleView />
                </Route>
                <Route exact path="/article/:id">
                    <ArticleView />
                </Route>
            </Switch>
        </Router>
    );
}
//<Route exact path="/:name">
//<StaticArticleView />
//</Route>
export default App;