import React from 'react';
import './LogoStyle.scss';
import logo from './logo.png';

type Props = {
    className : string
};

const Logo : React.FC<Props> = (props : Props) => {
    return <img src={logo} className={`logo ${props.className}`}/>
}

export default Logo;