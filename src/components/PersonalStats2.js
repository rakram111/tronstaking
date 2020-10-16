import React, { Component } from 'react'
import Utils from '../utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const url = "https://tronstaking.cc/ref/";
let addressTronScan = "https://tronscan.org/#/contract/";

toast.configure();

class PersonalStats2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,

        }
        this.withdraw = this.withdraw.bind(this);

    }
    async withdraw() {
        await Utils.contract
            .withdraw()
            .send({
                from: this.state.account,
            }).then(res => toast.success(' Wihdrawal processing', { position: toast.POSITION.TOP_RIGHT, autoClose: 10000 })

            ).then(res => {
                window.location = "/";
            });


    }


    render() {

        const colStyle = {
            backgroundImage: "linear-gradient(to right, black, #474708)", opacity: "70%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee",
        };





        return (

            <div style={{ paddingTop: "30px" }}>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={{ marginTop: "-18px", backgroundImage: "linear-gradient(to right, black, #474708)", borderRadius: "5px", color: "white", textAlign: "center", fontWeight: "bold", fontSize: "16px" }}>
                            Personal Stats</div>
                        <br />

                        <div className="col-xl-12" >
                            <p style={{ color: "white", fontSize: "17px", float: "left" }}>My Address</p>
                            <a href={addressTronScan + this.props.account} style={{ color: "white", fontSize: "17px", float: "right", textDecoration: "underline" }}>
                                {this.props.subAccount}...</a>

                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", float: "left" }}>Upline</p>
                            <a href={addressTronScan + this.props.upline} style={{ color: "white", fontSize: "17px", float: "right", textDecoration: "underline" }}>
                                {this.props.subUpline}...</a>

                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", float: "left" }}>Personal Stake Value</p>
                            <p style={{ color: "white", fontSize: "17px", float: "right" }}> {this.props.userTotalDeposit} TRX</p>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", float: "left" }}>Lucky Bonus</p>
                            <p style={{ color: "white", fontSize: "17px", float: "right" }}> {this.props.lucky_bonus} TRX</p>
                            <br /><br />



                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Dividends Unwithdrawn</p>
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}> {this.props.dividends} TRX</p>
                            <br />


                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Referral Bonus Earned</p>
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}> {Number(this.props.ref_bonus).toFixed(2)} TRX</p>
                            <br />

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Referral Bonus Unwithdrawn</p>
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}> {this.props.bonus_rem} TRX</p>
                            <br />

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total Withdrawn</p>
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}> {this.props.userTotalWithdrawn} TRX</p>
                            <br />


                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div >

        )
    }
}

export default PersonalStats2
