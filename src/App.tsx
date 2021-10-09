import React, { useEffect, useState } from "react";
import "./App.scss";
import Home from './pages/Home/Home';
import { Scrapper } from "./services/ArticlesScrapper";
import Loading from "./components/LoadingScreen/Loading";

const App : React.FC = () => {
    const [urlRoutess, setUrlRoutes] = useState<UrlRoute[]>();
  
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
                    <Loading/>
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