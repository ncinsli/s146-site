import React from 'react';
import loadingImg from './cheldumaet.png'

const Loading : React.FC = () => {
    return (
        <React.Fragment>
            <div style = {{
                    height: '40vh',
                    marginTop: '60vh',
                    display: 'flex'
                }}>
                <img src={loadingImg} ></img>
                <h1>Загрузка...
                    скорее всего, проблема с сервером
                </h1>
            </div>
        </React.Fragment>
    );
};

export default Loading;