import React, { Component } from 'react'
import about from "./Image1/abou.gif"

class About extends Component {
    render() {

        const pageBack = {
            backgroundImage: `url(${about})`, backgroundAttachment: "fixed", fontFamily: "MyFont"
            , height: "auto", width: "100%", margin: "0", backgroundPosition: "center", overflow: "hidden", marginTop: "-30px", paddingTop: "100px", paddingBottom: "100px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundBlendMode: "multiply"
        };
        return (
            <div style={pageBack}>
                <div style={{ backgroundColor: "black", opacity: "80%", marginTop: "-110px", marginBottom: "-140px", }}>
                    <br />
                    <br />
                    <h2 style={{ color: "white", marginLeft: "30px", fontFamily: "myFont" }}>Staking Plan</h2>
                    <p style={{ paddingBottom: "120px" }}></p>
                </div>
            </div>
        )
    }
}

export default About
