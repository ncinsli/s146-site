import React from 'react';
import './Feed.scss';
import ArticleCard from '../../Articles/ArticleCard';
import { useHistory } from 'react-router';
import Article from '../Article/Article';
import ReactDOM from 'react-dom';

type Props = {
    items : Array<ArticleFull>;
    className : string;
};

const Feed : React.FC<Props> = (props : Props) => {
    const itemRows: JSX.Element[] = [];
    const history = useHistory();

    props.items.forEach(item => {
        const row = (
            <ArticleCard onClick={ () => { history.push(`/article`, item) } } 
                className="Card" title={item.title} subTitle={item.body} photo="http://www.rosphoto.com/images/u/articles/1510/4_8.jpg"/>
        );
        itemRows.push(row);
    });

    return (
        <React.Fragment>
            <div className={`Feed ${props.className}`}>
                <h1>Последние новости</h1>
                <div className="FeedDiv">
                    {itemRows}
                </div>
            </div>
        </React.Fragment>
    )
    //return (<div></div>);
};

export default Feed;