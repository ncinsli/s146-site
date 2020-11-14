import React from "react";
import "./buttonStyle.scss";
type Props = {
    text : string, 
    isBold : boolean
}

class DButton extends React.Component<Props>{
    render(){
        return(
            <React.Fragment>
                <button className = "designedButton">
                    <p className = "buttonText" style = {{ fontWeight: this.props.isBold ? 800 : 200 }}>{this.props.text}</p>
                </button>
            </React.Fragment>
        );
    }
}

export default DButton;