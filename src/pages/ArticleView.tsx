import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router';
import Feed from '../components/Complicated/Feed/Feed';
import SideMenu from '../components/Complicated/SideMenu/SideMenu';
import TopMenu from '../components/Complicated/TopMenu/TopMenu';
import UpperDecoration from '../components/UpperDecoration/UpperDecoration';
import axios from 'axios';
import { ArticleResponse, Scrapper } from '../services/ArticlesScrapper';
import Article from '../components/Complicated/Article/Article';
import Button from '../components/Buttons/Button';
import './ArticleView.scss';

const ArticleView : React.FC = () => {
    const history = useHistory();

    return (
        <React.Fragment>
            <UpperDecoration/>
            <TopMenu selectedIndex={0} className="TopMenu"/>
            <SideMenu className="SideMenu"/>
            <div className="ArticleAndOperations">
                <Article className="Article" displayed={history.location.state as ArticleFull}></Article>
                <Button text="Назад" className="Back" onClick={() => history.push('/')}></Button>
            </div>
        </React.Fragment>
    );
}

export default withRouter(ArticleView);