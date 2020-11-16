import React from 'react';
import './eventCardStyle.scss';
import defaultPic from "../img/defaultEventPic.jpg";
type Props = {
    picturePath : string,
    title : string,
    main : string
};

class EventCard extends React.Component<Props>{
    render(){
        return(
            <React.Fragment>
                <div className = "wrapper">
                    <div className = "pictureWrapper">
                        <div className = "colorFilter"></div>
                        <img src = {defaultPic}></img>
                    </div>
                    <h4 className = "title">{this.props.title}</h4>
                    <h5 className = "main">{this.props.main}</h5>
                </div>
            </React.Fragment>
        );
    }
}

export default EventCard; 