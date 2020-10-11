import React, { Component } from 'react'

class Banner extends Component {

    render() {

        const colStyle = {
            opacity: "70%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee"
        };

        return (

            <div style={{ paddingTop: "30px" }}>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>
                        <br />


                        <div style={{ color: "white", fontSize: "23px", fontFamily: "MyFont", textAlign: "center", fontWeight: "bold" }}>
                            Become a Member and Get a chance to win 10,000,000 TRX in Daily Lucky Draw
                         </div>
                        <br />


                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div >

        )
    }
}

export default Banner
