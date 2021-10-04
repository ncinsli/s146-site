import React from "react";
import {useEffect, useState} from "react";
import UpperDecoration from "../components/UpperDecoration/UpperDecoration";
import TopMenu from "../components/Complicated/TopMenu/TopMenu";
import LeftMenu from "../components/Complicated/LeftMenu/LeftMenu";
import Feed from "../components/Complicated/Feed/Feed";
import axios from 'axios';
import ErrorPage from './ErrorPage';

const Home : React.FC = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      axios.get('https://api-ncinsli.dev.dc7342.im/posts/get/0').then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    if (!posts) return null;
    console.log(posts);

    return (
        <React.Fragment>
            <UpperDecoration/>
            <TopMenu className="TopMenu"/>
            <LeftMenu className="LeftMenu"/>
            <Feed className="PostsLenta" items={posts}/>
        </React.Fragment>
    );
}
export default Home;