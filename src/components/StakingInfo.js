import React, { Component } from 'react'

// const contract_address = 'TX3TJVEPhVJWTJUWgyFbSp2tTDMvEYWMqH';

// let contracturl = "https://tronscan.org/#/contract/" + contract_address;

export class SmartInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,

        }

    }

    render() {


        const colStyle = {
            backgroundImage: "linear-gradient(to right, black, #474708)", opacity: "70%", marginTop: "60px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee",
        };

        return (

            <div>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={{ marginTop: "-18px", backgroundImage: "linear-gradient(to right, black, #8D183B)", borderRadius: "5px", color: "white", textAlign: "center", fontWeight: "bold", fontSize: "19px" }}>
                            Current Staking Stats</div>

                        <br />

                        <div className="col-xl-12" >
                            <p style={{ color: "white", fontSize: "17px", float: "left" }}>Base Staking </p>
                            <p style={{ color: "white", fontSize: "17px", float: "right" }}> +1.00 %</p>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", float: "left" }}>Contract Bonus </p>
                            <p style={{ color: "white", fontSize: "17px", float: "right" }}>
                                +{this.props.contract_bonus} %</p>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", float: "left" }}> Net Daily Staking </p><p style={{ color: "white", fontSize: "17px", float: "right" }}> +{this.props.dailyRate} %</p>
                            <br /><br />
                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div >
        )
    }
}

export default SmartInfo
