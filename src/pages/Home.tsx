import React from "react";
import {useEffect, useState} from "react";
import UpperDecoration from "../components/UpperDecoration/UpperDecoration";
import TopMenu from "../components/Complicated/TopMenu/TopMenu";
import LeftMenu from "../components/Complicated/LeftMenu/LeftMenu";
import PostsLenta from "../components/Complicated/PostsLenta/PostsLenta";
import axios from 'axios';
import ErrorPage from './ErrorPage';



function Home() {
    /*const [posts, setPost] = useState([]);
  
    useEffect(() => {
      axios.get('https://api-ncinsli.dev.dc7342.im/posts/get/0').then((response) => {
        setPost(JSON.parse(response.data));
      });
    }, []);
  
    if (!posts) return null;
    console.log(posts);*/
    let posts = JSON.parse('[{"id":1,"title":"Первая новость","date":"30.09.2021 23:18","body":"Это первая новость нового сайта школы 146!","attachments":"{}"},{"id":2,"title":"Вторая новость","date":"30.09.2021 23:20","body":"Это вторая новость нового сайта школы 146!","attachments":"{}"},{"id":3,"title":"заголовок 5","date":"9/30/2021, 6:50:05 PM","body":"тело","attachments":"{}"},{"id":5,"title":"заголовок 5","date":"9/30/2021, 7:08:51 PM","body":"тело","attachments":"{}"},{"id":6,"title":"заголовок 666","date":"9/30/2021, 7:08:51 PM","body":"тело","attachments":"{}"},{"id":7,"title":"заголовок 5","date":"9/30/2021, 7:08:52 PM","body":"тело","attachments":"{}"}]');
    return (
        <React.Fragment>
            <UpperDecoration/>
            <TopMenu className="TopMenu"/>
            <LeftMenu className="LeftMenu"/>
            <PostsLenta className="PostsLenta" items={posts}/>
        </React.Fragment>
    );
}
export default Home;