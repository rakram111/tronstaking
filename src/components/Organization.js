import React, { Component } from 'react'

// const contract_address = 'TLxbzm6DqP3kaKrB3mqGDbwLLaXSJgGQHn';

// let contracturl = "https://tronscan.org/#/contract/"  contract_address;

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

                        <div className="col-xl-6" style={{ marginTop: "-18px", backgroundImage: "linear-gradient(to right, black, #474708)", borderRadius: "5px", color: "white", textAlign: "center", fontWeight: "bold", fontSize: "16px" }}>
                            My Organization</div>

                        <br />

                        <div className="col-xl-12" >

                            <p style={{ color: "white", fontSize: "17px", float: "left" }}>Total Stake</p>
                            <p style={{ color: "white", fontSize: "17px", float: "right" }}> {this.props.userTotalDeposit} TRX</p>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", float: "left" }}>Referral Bonus Earned</p>
                            <p style={{ color: "white", fontSize: "17px", float: "right" }}> {this.props.ref_bonus} TRX</p>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", float: "left" }}>Lucky Bonus Earned</p>
                            <p style={{ color: "white", fontSize: "17px", float: "right" }}> {this.props.lucky_bonus} TRX</p>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", float: "left" }}>Dividends Withdrawn </p>
                            <p style={{ color: "white", fontSize: "17px", float: "right" }}>
                                {this.props.dividends} TRX</p>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", float: "left" }}>Total Earned</p>
                            <p style={{ color: "white", fontSize: "17px", float: "right" }}>
                                {this.props.userTotalWithdrawn + this.props.avlBalance + this.props.lucky_bonus} TRX</p>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", float: "left" }}>  Total Withdrawn</p><p style={{ color: "white", fontSize: "17px", float: "right" }}> {this.props.userTotalWithdrawn} TRX</p>
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
