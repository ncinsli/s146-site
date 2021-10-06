import React from 'react';
import './Article.scss';

type Props = {
    displayed : Article | undefined,
    className? : string
};

const Article : React.FC<Props> = (props : Props) => {
    console.log(props.displayed)
    return (
        <React.Fragment>
            {
                !props.displayed
                ?
                    <h1>Статья не существует</h1>
                :
                <div className={`Article ${props.className}`}>
                    <h1>{props.displayed?.title}</h1>

                </div>
            }
        </React.Fragment>
    )
};

export default Article;