import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router';
import { useParams } from 'react-router-dom';
import Feed from '../components/Complicated/Feed/Feed';
import SideMenu from '../components/Complicated/SideMenu/SideMenu';
import TopMenu from '../components/Complicated/TopMenu/TopMenu';
import UpperDecoration from '../components/UpperDecoration/UpperDecoration';
import { ArticleResponse, Scrapper } from '../services/ArticlesScrapper';
import Article from '../components/Complicated/Article/Article';
import Button from '../components/Buttons/Button';
import './ArticleView.scss';

const ArticleView : React.FC = () => {
    const history = useHistory();
    const { name } : any = useParams();
    const [post, setPost] = useState<ArticleFull | undefined>();

    useEffect(() => {
        Scrapper.ScrapStaticPost(name).then((res : ArticleResponse) => {
            if (!res) return;
            setPost(res.data);
        });
    }, []);
    return (
        <React.Fragment>
            <UpperDecoration/>
            <TopMenu selectedIndex={name} className="TopMenu"/>
            <SideMenu selectedIndex={name} className="SideMenu"/>
            <div className="ArticleAndOperations">
                <Article className="Article" displayed={post}></Article>
                <Button text="Назад" className="Back" onClick={() => history.goBack()}></Button>
            </div>
        </React.Fragment>
    );
}

export default withRouter(ArticleView);