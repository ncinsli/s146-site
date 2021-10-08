import React from "react";
import {useEffect, useState} from "react";
import UpperDecoration from "../components/UpperDecoration/UpperDecoration";
import TopMenu from "../components/Complicated/TopMenu/TopMenu";
import SideMenu from "../components/Complicated/SideMenu/SideMenu";
import Feed from "../components/Complicated/Feed/Feed";
import './Home.scss';
import ErrorPage from './ErrorPage';
import { Scrapper } from "../services/ArticlesScrapper";

const Home : React.FC = () => {
    const [posts, setPosts] = useState<ArticlePreview[]>([]);
  
    useEffect(() => {
      Scrapper.ScrapPreviews().then((res) => {
        if (res?.data === undefined) return;
        setPosts(res.data)
      });
    }, []);

    
    return (
        <React.Fragment>
            <UpperDecoration/>
            <TopMenu selectedIndex='home' className="TopMenu"/>
            <SideMenu selectedIndex='home' className="SideMenu"/>
            <Feed className="Feed" items={posts}/>
        </React.Fragment>
    );
}
export default Home;