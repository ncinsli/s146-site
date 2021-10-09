import React, { useEffect, useState } from 'react';
import './Article.scss';

type Props = {
    displayed : ArticleFull | undefined,
    className? : string
};

const Article : React.FC<Props> = (props : Props) => {
    const [time, setTime] = useState<boolean>(false);
    
    useEffect(() => {
        setTimeout(() => setTime(true), 100);
        
    })
    
    // if (props.displayed?.attachments)
    // console.log((props.displayed.attachments));

    return (
        <React.Fragment>
            {
                props.displayed === undefined
                ?
                    <div className={`Article ${props.className}`}>
                        {
                            time ? 
                                <h1>Статья не существует</h1>
                            :
                                <h1></h1>
                        }
                    </div>
                :
                <div className={`Article ${props.className}`}>
                    <h1>{props.displayed.title}</h1>
                    <h3>{props.displayed.date}</h3>
                    <p className="ArticleBody" dangerouslySetInnerHTML={{__html: props.displayed.body}}/>
                    {}
                </div>
            }
        </React.Fragment>
    )
};

export default Article;