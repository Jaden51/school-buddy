import React, { Component } from "react";
import './App.css'
import bkg from "./assets/img/aboutus.png";

class AboutPage extends Component {
    render() {
        return (

            // <StyledAboutPage>
                <div className="about_page">
                    <img className="aboutUsBkg" src={bkg} alt="background">

                    </img>

                </div>
            /* </StyledAboutPage> */
        )
    }
}

export default AboutPage;
// const StyledAboutPage = styled.div`
//     .header {
//         font-size: 100px;
//     }

// `;
