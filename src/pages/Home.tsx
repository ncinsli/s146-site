import React from "react";
import {useEffect, useState} from "react";
import UpperDecoration from "../components/UpperDecoration/UpperDecoration";
import TopMenu from "../components/Complicated/TopMenu/TopMenu";
import SideMenu from "../components/Complicated/SideMenu/SideMenu";
import Feed from "../components/Complicated/Feed/Feed";
import axios from 'axios';
import './Home.scss';
import ErrorPage from './ErrorPage';

const Home : React.FC = () => {
    const [posts, setPosts] = useState<Article[]>([]);
  
    useEffect(() => {
      axios.get('https://api-ncinsli.dev.dc7342.im/posts/get/0').then((response : ArticleList) => {
        setPosts(response.data);
      });
    }, []);
  
    if (!posts) return null;
    
    return (
        <React.Fragment>
            <UpperDecoration/>
            <TopMenu className="TopMenu"/>
            <SideMenu className="SideMenu"/>
            <Feed className="Feed" items={posts}/>
        </React.Fragment>
    );
}
export default Home;