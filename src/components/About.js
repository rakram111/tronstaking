import React, { Component } from 'react'
import about from "./Image1/abou.gif"


class About extends Component {
    render() {

        const pageBack = {
            backgroundImage: `url(${about})`, position: "relative", height: "100%", width: "100%", overflow: "hidden"
        };
        const layer = {
            backgroundColor: "black",
            opacity: "80%",
            width: "100%",
            height: "100%",
        }
        return (
            <div style={pageBack}>
                <div style={layer}>
                    <div style={{ paddingTop: "10px" }}></div>
                    <div style={{ textAlign: "center", paddingTop: "40px" }}>
                        <img src={require("./Image1/logo.png")} alt="Logo" width="600px" />

                    </div>
                    <div style={{ paddingBottom: "30px" }}></div>

                    <div className="row">
                        <div className="col-xl-1"></div>
                        <div className="col-xl-5">
                            <img src={require("./Image1/topleft.png")} alt="Logo" width="500px" height="500px" />
                        </div>
                        <div className="col-xl-5" style={{
                            paddingTop: "22px", paddingLeft: "30px"
                        }} >
                            <h3 style={{ paddingTop: "122px", color: "white", fontFamily: "MyFont", padding: "12px" }}>
                                <span style={{ color: "orange", fontWeight: "bold" }}>Tron Staking</span>  is the most advanced algorithm in Smart Contract Industry.
                            </h3>

                            <br />
                            <h3 style={{ paddingTop: "22px", color: "orange", fontFamily: "MyFont", paddingLeft: "12px" }}>
                                Our Features</h3>
                            <h3 style={{ paddingTop: "20px", color: "white", fontFamily: "MyFont", paddingLeft: "12px" }}>
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Self Sustainable
                                <br />
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Highly Secured
                                <br /><img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Decentralized
                                <br /><img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Creative
                                <br /><img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Lucrative
                                <br />
                            </h3>
                        </div>
                        <div className="col-xl-1"></div>
                    </div>

                    <div style={{ paddingBottom: "100px" }}></div>
                </div>
            </div >
        )
    }
}

export default About
