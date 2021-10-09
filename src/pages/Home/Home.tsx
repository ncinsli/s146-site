import React from "react";
import {useEffect, useState} from "react";
import UpperDecoration from "../../components/UpperDecoration/UpperDecoration";
import TopMenu from "../../components/Complicated/TopMenu/TopMenu";
import SideMenu from "../../components/Complicated/SideMenu/SideMenu";
import Feed from "../../components/Complicated/Feed/Feed";
import './Home.scss';
import ErrorPage from '../ErrorPage';
import { Scrapper } from "../../services/ArticlesScrapper";
import StaticArticleView from "../ArticleView/StaticArticleView";
import ArticleView from "../ArticleView/ArticleView";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FeedLoading from "../../components/FeedLoading/FeedLoading";
import BaseMenu from "../../components/Complicated/BaseMenu/BaseMenu";

type Props = {
  urlRoutes: Array<UrlRoute>
};

const Home : React.FC<Props> = (props : Props) => {
    const [posts, setPosts] = useState<ArticlePreview[]>([]);
  
    useEffect(() => {
      Scrapper.ScrapPreviews().then((res) => {
        if (!res) return;
        setPosts(res.data)
      });
    }, []);



    const itemRows: JSX.Element[] = [];

    props.urlRoutes.forEach((item, index) => {
        const row = (
            <Route key={index} exact path={`/${item.urlRoute}`}>
              <StaticArticleView urlRoute={`/${item.urlRoute}`}/>
          </Route>
        );
        itemRows.push(row);
    });
    
    return (
        <React.Fragment>
        <Router>
            <UpperDecoration/>
            <BaseMenu />
            <Switch>


                  <Route exact path="/"> 
                    <Feed className="Feed" items={posts}/>
                  </Route>
                  
                  {
                    !
                        itemRows 
                    ?
                        <FeedLoading/>
                    :
                    itemRows
                  }

                  <Route path="/article/:id">
                      <ArticleView />
                  </Route>
              </Switch>
          </Router>
        </React.Fragment>
    );
}
export default Home;