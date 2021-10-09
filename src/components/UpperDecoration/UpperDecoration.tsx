import React from 'react';
import './UpperDecorationStyle.scss';
import decorationPC from './Upper-Decoration.png';
import decorationMobile from './Upper-Decoration-Mobile.png';

const UpperDecoration : React.FC = () => {
    return(
        <div className = "DecorationBackground">
            <img className="decorationPC" src={decorationPC}/>
            <img className="decorationMobile" src={decorationMobile}/>
        </div>
    );
};

export default UpperDecoration;