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
                    <p>{props.displayed.body}</p>

                </div>
            }
        </React.Fragment>
    )
};

export default Article;