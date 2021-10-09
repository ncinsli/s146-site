import React from "react";
import "./FooterStyle.scss";

const Footer : React.FC = () => {
    return(
        <React.Fragment>
            <h3 className="footer">© Муниципальное автономное общеобразовательное учреждение <br/>
"Средняя общеобразовательная школа № 146 с углубленным изучением математики, физики, информатики" г.Перми, 2003-2020 гг.</h3>
        </React.Fragment>
    );
};

export default Footer;