import React from 'react';
import './Feed.scss';
import ArticleCard from '../../Articles/ArticleCard';

type Item = {
    title: string;
    body: string;
}
type Props = {
    items : Array<Item>;
    className : string;
};

const Feed : React.FC<Props> = (props : Props) => {
    const itemRows: JSX.Element[] = [];
    
    props.items.forEach(item => {
        const row = (
            <ArticleCard className="Card" title={item.title} subTitle={item.body} photo="http://www.rosphoto.com/images/u/articles/1510/4_8.jpg"/>
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