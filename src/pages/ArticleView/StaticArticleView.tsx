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

type Props = { 
    route : string
}

const StaticArticleView : React.FC<Props> = (props : Props) => {
    const history = useHistory();
    const { urlRoute } : any = useParams();
    const [post, setPost] = useState<ArticleFull | undefined>();

    useEffect(() => {
        Scrapper.ScrapStaticPost(urlRoute).then((res : ArticleResponse) => {
            if (!res) return;
            setPost(res.data);
        });
    }, [urlRoute]);
    
    return (
        <React.Fragment>
            <UpperDecoration/>
            <TopMenu selectedRoute={props.route} className="TopMenu"/>
            <SideMenu selectedRoute={props.route} className="SideMenu"/>
            <div className="ArticleAndOperations">
                <Article className="Article" displayed={post}></Article>
            </div>
        </React.Fragment>
    );
}

export default StaticArticleView;