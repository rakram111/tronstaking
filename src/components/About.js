import React, { Component } from 'react'
import about from "./Image1/abou.gif"

class About extends Component {
    render() {

        const pageBack = {
            backgroundImage: `url(${about})`, position: "relative", height: "100%", width: "100%", overflow: "hidden",
        };
        const colStyle = {
            color: "yellow", fontSize: "17px"
        };
        const col1Style = {
            color: "yellow", fontSize: "29px"
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
                        <img src={require("./Image1/logo.png")} alt="Logo" width="500px" />

                    </div>
                    <br />
                    <div className="row">
                        <div className="col-xl-1"></div>
                        <div className="col-xl-5">
                            <img src={require("./Image1/topleft.png")} alt="Logo" width="500px" height="500px" />
                        </div>
                        <div className="col-xl-5" style={{
                            paddingTop: "22px", paddingLeft: "30px"
                        }} >
                            <h5 style={{ paddingTop: "122px", color: "white", padding: "12px", fontSize: "17px" }}>
                                <span style={{ color: "orange", fontSize: "17px" }}>Tron Staking</span>  is the most advanced algorithm in Smart Contract Industry.
                            </h5>


                            <h5 style={{ paddingTop: "22px", color: "orange", paddingLeft: "12px", fontSize: "17px" }}>
                                Our Features</h5>
                            <h5 style={{ paddingTop: "20px", color: "white", paddingLeft: "12px", fontSize: "17px" }}>
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Self Sustainable
                                <br />                                <br />
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Highly Secured
                                <br />                                <br />
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Decentralized
                                <br />                                <br />
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Creative
                                <br />                                <br />
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Lucrative
                                <br />                                <br />
                            </h5>
                        </div>
                        <div className="col-xl-1"></div>
                    </div>
                    <div style={{ paddingBottom: "10px" }}></div>
                </div>
                <div style={layer}>
                    <div style={{ paddingTop: "10px" }}></div>
                    <div style={{ textAlign: "center", paddingTop: "40px" }}>
                        <img src={require("./Image1/stakingplan.png")} alt="Logo" width="550px" />

                    </div>
                    <div className="row">
                        <div className="col-xl-1"></div>
                        <div className="col-xl-5" style={{
                            paddingTop: "22px", paddingLeft: "30px"
                        }} >
                            <h5 style={{ paddingTop: "32px", color: "white", paddingLeft: "22px", fontFamily: "MyFont" }}>
                                <span style={{ color: "orange" }}>Tron Staking</span>  Passive Bonus
                            </h5>
                            <br />
                            <h5 style={{ paddingTop: "10px", color: "white", paddingLeft: "12px", fontSize: "17px" }}>
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Base Staking Bonus <span style={colStyle}>
                                    +1.00 %  </span>
                                <br />
                                <br />
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Personal Hold Bonus <span style={colStyle}>
                                    +0.05 %  </span> <br /> <span style={{ paddingLeft: "40px" }}></span>( For every 24 Hours )
                                <br /><br />
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Contract Balance Bonus <span style={colStyle}>
                                    +0.01 %  </span> <br /><span style={{ paddingLeft: "40px" }}></span>( For every 100,000 TRX )
                                <br />

                            </h5>
                        </div>
                        <div className="col-xl-5" style={{
                            paddingTop: "22px", paddingLeft: "30px"
                        }} >
                            <h5 style={{ paddingTop: "32px", color: "white", paddingLeft: "22px", fontFamily: "MyFont" }}>
                                <span style={{ color: "orange" }}>Tron Staking</span>  Active Bonus
                            </h5>
                            <br />
                            <h5 style={{ paddingTop: "20px", color: "white", paddingLeft: "12px", fontSize: "17px" }}>
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Affiliate Bonus <span style={colStyle}>
                                    +7.00 %  </span>
                                <br />
                                <br />
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Lucky Bonus <span style={colStyle}>
                                    +0.5 %  </span> <br /> <span style={{ paddingLeft: "40px" }}></span>( Drawn Everyday )
                                <br />
                                <br />
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> ROI Receivable Limit <span style={colStyle}>
                                    +200 %  </span> <br /> <span style={{ paddingLeft: "40px" }}></span>
                                <br />
                                <img src={require("./Image1/logopng.png")} alt="Logo" width="30px" style={{ paddingRight: "7px" }} /> Referral Bonus Limit <span style={col1Style}>
                                    &infin;</span> <br /> <span style={{ paddingLeft: "40px" }}></span>
                                <br />
                            </h5>
                        </div>
                        <div className="col-xl-1"></div>
                    </div>
                    <div style={{ paddingBottom: "30px" }}></div>
                </div>
            </div >
        )
    }
}

export default About
