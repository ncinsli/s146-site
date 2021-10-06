import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Feed from '../components/Complicated/Feed/Feed';
import SideMenu from '../components/Complicated/SideMenu/SideMenu';
import TopMenu from '../components/Complicated/TopMenu/TopMenu';
import UpperDecoration from '../components/UpperDecoration/UpperDecoration';
import axios from 'axios';
import './About.scss';
import { ArticleResponse, Scrapper } from '../services/ArticlesScrapper';
import Article from '../components/Complicated/Article/Article';

const About : React.FC = () => {
    const [post, setPost] = useState<Article | undefined>();
    console.log("Post 0-st update", post);
    useEffect(() => {
        Scrapper.ScrapPost(5).then((res : ArticleResponse) => {
            if (!res) return;
            console.log("Before 1st update");
            setPost(res.data);
        });
    }, []);
  
    // if (!posts) return null;

    return (
        <React.Fragment>
            <UpperDecoration/>
            <TopMenu className="TopMenu"/>
            <SideMenu className="SideMenu"/>
            <Article displayed={post} className="Article" />
        </React.Fragment>
    );
};

export default About;