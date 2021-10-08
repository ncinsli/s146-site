import React from 'react';
import './Article.scss';

type Props = {
    displayed : ArticleFull,
    className? : string
};

const Article : React.FC<Props> = (props : Props) => {
    console.log(props.displayed)
    return (
        <React.Fragment>
            {
                !props.displayed
                ?
                <div className={`Article ${props.className}`}>
                    <h1>Статья не существует</h1>
                </div>
                :
                <div className={`Article ${props.className}`}>
                    <h1>{props.displayed.title}</h1>
                    <h3>{props.displayed.date}</h3>
                    <p>{props.displayed.body}</p>

                </div>
            }
        </React.Fragment>
    )
};

export default Article;