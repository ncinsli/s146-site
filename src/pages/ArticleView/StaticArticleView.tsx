import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router';
import { useParams } from 'react-router-dom';
import SideMenu from '../../components/Complicated/SideMenu/SideMenu';
import TopMenu from '../../components/Complicated/TopMenu/TopMenu';
import UpperDecoration from '../../components/UpperDecoration/UpperDecoration';
import { ArticleResponse, Scrapper } from '../../services/ArticlesScrapper';
import Article from '../../components/Complicated/Article/Article';
import Button from '../../components/Buttons/Button';
import './ArticleView.scss';

const StaticArticleView : React.FC = () => {
    const history = useHistory();
    const { urlRoute } : any = useParams();
    const [post, setPost] = useState<ArticleFull | undefined>();

    useEffect(() => {
        console.log("URL ROUTE", urlRoute);
        Scrapper.ScrapStaticPost(urlRoute).then((res : ArticleResponse) => {
            if (!res){
                console.log("Hi");
                return;
            }
            setPost(res.data);
        });
    }, []);
    return (
        <React.Fragment>
            <UpperDecoration/>
            <TopMenu selectedRoute={urlRoute} className="TopMenu"/>
            <SideMenu selectedRoute={urlRoute} className="SideMenu"/>
            <div className="ArticleAndOperations">
                <Article className="Article" displayed={post}></Article>
            </div>
        </React.Fragment>
    );
}

export default withRouter(StaticArticleView);