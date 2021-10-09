import React from 'react';
import loadingImg from './cheldumaet.png'

const Loading : React.FC = () => {
    return (
        <React.Fragment>
            <img src={loadingImg} style = {{
                height: '40vh',
                marginTop: '60vh',
                display: 'flex'
            }}></img>
        </React.Fragment>
    );
};

export default Loading;