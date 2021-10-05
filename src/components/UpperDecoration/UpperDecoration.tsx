import React from 'react';
import './UpperDecorationStyle.scss';
import decoration from './Upper-Decoration.png';

const UpperDecoration : React.FC = () => {
    return(
        <div className = "DecorationBackground">
            <img src={decoration}/>
        </div>
    );
};

export default UpperDecoration;