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

const PostsLenta : React.FC<Props> = (props : Props) => {
    const itemRows: any[] = [];
    console.log(props);
    props.items.forEach(item => {
        const row = (
            <ArticleCard title={item.title} subTitle={item.body} photo="http://www.rosphoto.com/images/u/articles/1510/4_8.jpg"/>
        );
        itemRows.push(row);
    });
    return (
        <React.Fragment>
            <div className="PostsLentaDiv">
            {itemRows}
            </div></React.Fragment>
    )
    //return (<div></div>);
};

export default PostsLenta;