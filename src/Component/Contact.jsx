import React from "react";
import "./CSS/Contact.css";

const Contact = () => {
    return (
        <div id="contact">
            <h2 >CONTACT !</h2>
            <img id="logo-img" src="https://github.com/vivivicdjdk/Myportfolio-react/blob/gh-pages/image/github-mark.png" alt="깃허브"/> Github <br/>
            <img id="logo-img" src="https://github.com/vivivicdjdk/Myportfolio-react/blob/gh-pages/image/youtube.svg" alt="유튜브" /> Youtube <br/>
            <img id="logo-img" src="https://github.com/vivivicdjdk/Myportfolio-react/blob/gh-pages/image/gmail.svg" alt="지메일" /> joyejin1109@gachon.ac.kr

            <br/><br/>
            <p>Thank you {': )'}</p>
        </div>
    );
};

export default Contact;