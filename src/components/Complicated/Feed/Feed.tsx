import React from 'react';
import './Feed.scss';
import ArticleCard from '../../Articles/ArticleCard';
import { useHistory } from 'react-router';
import FeedLoading from '../../FeedLoading/FeedLoading';

type Props = {
    items : ArticlePreviewList;
    className : string;
};

const Feed : React.FC<Props> = (props : Props) => {
    const itemRows: JSX.Element[] = [];
    const history = useHistory();

    props.items.forEach((item, index) => {
        const row = (
            <ArticleCard key={index} onClick={ () => { history.push(`/article/${item.id}`, item) } } 
                className="Card" title={item.title} subTitle={item.body} photo={item.titlePicture !== undefined ? item.titlePicture : ""}/>
        );
        itemRows.push(row);
    });

    return (
        <React.Fragment>
            <div className={`Feed ${props.className}`}>
                <h1>Последние новости</h1>
                <div className="FeedDiv">
                    {
                        !
                            itemRows 
                        ?
                            <FeedLoading/>
                        :
                        itemRows
                    }
                </div>
            </div>
        </React.Fragment>
    )
    //return (<div></div>);
};

export default Feed;