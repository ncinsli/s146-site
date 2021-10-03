import React from 'react';
import './UpperDecorationStyle.scss';
import decoration from './Upper-Decoration.png';

const UpperDecoration : React.FC = () => {
    return(
        <div className = "DecorationBackground">
            <img src={decoration} className="Decoration"/>
        </div>
    );
};

export default UpperDecoration;