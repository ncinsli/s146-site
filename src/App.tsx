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

const routes : Array<{path : string, exact? : boolean, component? : JSX.Element, main : () => JSX.Element}> = [
    {
        path: "/",
        exact: true,
        main: () => <Home />,
    },
    {
        path: "/about",
        exact: true,
        main: () => <StaticArticleView route="about" />
    },
    {
        path: "/contacts",
        exact: true,
        main: () => <StaticArticleView route="contacts" />
    },
    {
        path: "/shum",
        exact: true,
        main: () => <StaticArticleView route="shum" />
    },
    {
        path: "/interview",
        exact: true,
        main: () => <StaticArticleView route="interview" />
    },
    {
        path: "/staff",
        exact: true,
        main: () => <StaticArticleView route="staff" />
    },
    {
        path: "/photos",
        exact: true,
        main: () => <StaticArticleView route="photos" />
    },
    {
        path: "/facultyTimetable",
        exact: true,
        main: () => <StaticArticleView route="facultyTimetable" />
    },
    {
        path: "/giveMeTask",
        exact: true,
        main: () => <StaticArticleView route="giveMeTask" />
    },
    {
        path: "/olimpiads",
        exact: true,
        main: () => <StaticArticleView route="olimpiads" />
    },
    {
        path: "/club146",
        exact: true,
        main: () => <StaticArticleView route="club146" />
    },
    {
        path: "/schoolNewspapers",
        exact: true,
        main: () => <StaticArticleView route="schoolNewspapers" />
    },
    {
        path: "/schoolPlan",
        exact: true,
        main: () => <StaticArticleView route="schoolPlan" />
    },
    {
        path: "/aboutWebsite",
        exact: true,
        main: () => <StaticArticleView route="aboutWebsite" />
    },
    {
        path: "article/:id",
        exact: true,
        main: () => <ArticleView />
    }
];

const App : React.FC = () => {
    return(
        <Router basename="/React">
            <Switch>
                { 
                    routes.map((route, index) => {
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main/>}
                        />
                    })
                }
            </Switch>
        </Router>
    );
}
//<Route exact path="/:name">
//<StaticArticleView />
//</Route>
export default App;