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
import BaseMenu from '../components/Complicated/BaseMenu/BaseMenu';
import { GlobalState } from '../services/GlobalState';

const ArticleView : React.FC = (props) => {
    const history = useHistory();

    return (
        <React.Fragment>
            <UpperDecoration/>
            <BaseMenu/>
            <div className="ArticleAndOperations">
                <Article className="Article" displayed={history.location.state as ArticleFull}></Article>
                <Button text="Назад" className="Back" onClick={() => history.push('/')}></Button>
            </div>
        </React.Fragment>
    );
}

export default withRouter(ArticleView);