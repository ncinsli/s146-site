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
    
    //const { urlRoute } = useParams();
    const urlRoute = props.urlRoute;
    const [post, setPost] = useState<ArticleFull | undefined>();
    console.log("ds");

    useEffect(() => {
        Scrapper.ScrapStaticPost(urlRoute).then((res : ArticleResponse) => {
            console.log(res);
            if (!res) return;
            setPost(res.data);
        });
    },[post]);
    return (
        <React.Fragment>
            <div className="ArticleAndOperations">
                <Article className="Article" displayed={post}></Article>
            </div>
        </React.Fragment>
    );
}

export default StaticArticleView;