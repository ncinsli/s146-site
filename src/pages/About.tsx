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
import { withRouter } from 'react-router-dom';

const About : React.FC = () => {
    const [post, setPost] = useState<ArticleFull | undefined>();

    useEffect(() => {
        Scrapper.ScrapPost(-1).then((res : ArticleResponse) => {
            if (!res) return;
            console.log(res); // @ts-ignore
            setPost(res.data[0]);
        });
    }, []);
  
    // if (!posts) return null;

    return (
        <React.Fragment>
            <UpperDecoration/>
            <TopMenu selectedIndex={1} className="TopMenu"/>
            <SideMenu className="SideMenu"/>
            <Article displayed={post} className="Article" />
        </React.Fragment>
    );
};

export default withRouter(About);