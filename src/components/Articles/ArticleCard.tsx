import React from 'react';
import './ArticleCardStyle.scss';

type Props = {
    title : string,
    subTitle : string,
    photo : string,
    className? : string
};

const OrangeDot : React.FC = () => <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E"> <circle cx="6.5" cy="6.5" r="6.5" fill="#FF9777"/> </svg>

const ArticleCard : React.FC<Props> = (props : Props) => {
    return (
        <React.Fragment>
            <div className = "ArticleCard">
                <div className = "ArticleText">
                    <h2 className = "ArticleTitle">{props.title}</h2>
                    <div className = "ArticleSubtitleAndDot">
                        {/* <OrangeDot/> */}
                
                        <p className = "ArticleSubtitle"> {props.subTitle} </p>
                    </div>
                </div>
                
                <div className = "ArticlePicture">
                    <img src="https://s146.ru/gallery//Photos/2019.09.05$$%D0%A2%D1%83%D1%80%D1%81%D0%BB%D1%91%D1%82//DSC_0987.jpg" alt="Картинобчка"/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ArticleCard;