import React from "react";
import {useEffect, useState} from "react";
import UpperDecoration from "../components/UpperDecoration/UpperDecoration";
import TopMenu from "../components/Complicated/TopMenu/TopMenu";
import SideMenu from "../components/Complicated/SideMenu/SideMenu";
import Feed from "../components/Complicated/Feed/Feed";
import axios from 'axios';
import './Home.scss';
import ErrorPage from './ErrorPage';
import { Scrapper } from "../services/ArticlesScrapper";
import BaseMenu from "../components/Complicated/BaseMenu/BaseMenu";
import { GlobalState } from "../services/GlobalState";

const Home : React.FC = () => {
    const [posts, setPosts] = useState<ArticlePreview[]>([]);
  
    useEffect(() => {
      GlobalState.setSelectionId(0);
      
      Scrapper.ScrapPreviews().then((res) => {
        if (res?.data === undefined) return;
        setPosts(res.data)
      });
    }, []);

    
    return (
        <React.Fragment>
            <UpperDecoration/>
            <BaseMenu/>
            <Feed className="Feed" items={posts}/>
        </React.Fragment>
    );
}
export default Home;