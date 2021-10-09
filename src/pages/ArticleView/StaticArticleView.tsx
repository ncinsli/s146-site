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
    urlRoute: string
};

const StaticArticleView : React.FC<Props> = (props : Props) => {
    const history = useHistory();
    const urlRoute = props.urlRoute;
    const [post, setPost] = useState<ArticleFull | undefined>();

    useEffect(() => {
        console.log("URL ROUTE", urlRoute);
        Scrapper.ScrapStaticPost(urlRoute).then((res : ArticleResponse) => {
            console.log(res);
            if (post != res.data) setPost(res.data);
        });
    }, [urlRoute]);

    return (
        <React.Fragment>
            <div className="ArticleAndOperations">
                <Article className="View" displayed={post}></Article>
            </div>
        </React.Fragment>
    );
}

export default StaticArticleView;