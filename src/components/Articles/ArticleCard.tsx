import React from 'react';
import './ArticleCardStyle.scss';

type Props = {
    title : string,
    subTitle : string,
    photo : string,
    className? : string,
    onClick : () => void
};

const OrangeDot : React.FC = () => <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E"> <circle cx="6.5" cy="6.5" r="6.5" fill="#FF9777"/> </svg>

const ArticleCard : React.FC<Props> = (props : Props) => {
    return (
        <React.Fragment>
            <div onClick={() => { props.onClick() }} className = {`ArticleCard ${props.className}`}>
                <div className = "ArticleText">
                    <h2 className = "ArticleTitle">{props.title}</h2>
                    <div className = "ArticleSubtitleAndDot">
                        {/* <OrangeDot/> */}
                
                        <p className = "ArticleSubtitle"> {props.subTitle} </p>
                    </div>
                </div>
                
                <div className = "ArticlePicture">
                    <img src={props.photo} alt="Картинобчка"/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ArticleCard;