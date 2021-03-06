import React, { Component } from 'react'


class TeamBiz extends Component {


    render() {

        const colStyle = {
            backgroundImage: "radial-gradient(red, black, red)", opacity: "70%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee"
        };


        return (

            <div style={{ paddingTop: "30px" }}>
                <div className="row">
                    <div className="col-xl-4"></div>
                    <div className="col-xl-4" style={colStyle}>

                        <div className="col-xl-12" style={{ marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, black, #474708)", borderRadius: "5px", color: "white", textAlign: "center", fontWeight: "bold", fontSize: "16px" }}>
                            Team Business</div>
                        <br />


                        <div style={{ color: "white", fontSize: "29px", fontFamily: "MyFont", textAlign: "center" }}> {Number(this.props.teambiz).toLocaleString()} TRX</div>
                        <br />
                    </div>
                    <div className="col-xl-4"></div>
                </div>
                <div style={{ paddingBottom: "20px" }}></div>
            </div >

        )
    }
}

export default TeamBiz
