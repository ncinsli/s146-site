import React from "react";
import "./tallButtonStyle.scss";
type Props = {
    text : string, 
    isBold : boolean,
    fontSize : number
}

class TallButton extends React.Component<Props>{
    render(){
        return(
            <React.Fragment>
                <button className = "designedTallButton">
                    <p className = "buttonText" style = {{ 
                        fontWeight: this.props.isBold ? 700 : 200,
                        fontSize: `${this.props.fontSize}em`
                    }}>{this.props.text}</p>
                </button>
            </React.Fragment>
        );
    }
}

export default TallButton;