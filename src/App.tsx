import "./App.scss";
import React, { useEffect, useState } from "react";
import Home from './pages/Home/Home';
import { Scrapper } from "./services/ArticlesScrapper";
import FeedLoading from "./components/FeedLoading/FeedLoading";

const App : React.FC = () => {
    const [urlRoutess, setUrlRoutes] = useState();
  
    useEffect(() => {
      Scrapper.ScrapRoutes().then((res) => {
        if (!res) return;
        setUrlRoutes(res.data)
      });
    }, []);


    return(
        <React.Fragment>
            {
                !
                urlRoutess
                ?
                    <FeedLoading/>
                :
                
            <Home urlRoutes = {urlRoutess}/>
            }
        </React.Fragment>
    );
}
//<Route exact path="/:name">
//<StaticArticleView />
//</Route>
export default App;