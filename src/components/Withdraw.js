import React, { Component } from 'react'
import Utils from "../utils";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class MyPresentStaking extends Component {
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
            backgroundImage: "radial-gradient(red, black, red)", opacity: "70%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee"
        };

        const investButton = {
            display: "inline - block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "black",
            transition: ".4s", marginTop: "30px", marginLeft: "300px", marginBottom: "-22px", fontWeight: "bold", fontFamily: "MyFont", textAlign: "center", backgroundImage: "linear-gradient(to right, #FFDD00, #FBB034)", fontSize: "18px", borderRadius: "30px"


        };
        return (

            <div style={{ paddingTop: "30px" }}>
                <div className="row">
                    <div className="col-xl-4"></div>
                    <div className="col-xl-4" style={colStyle}>

                        <div className="col-xl-12" style={{ marginTop: "-18px", marginLeft: "-5px", backgroundColor: "black", borderRadius: "5px", color: "white", textAlign: "center", fontWeight: "bold", fontSize: "19px" }}>
                            Withdrawable Balance</div>
                        <br />


                        <div style={{ color: "white", fontSize: "29px", fontFamily: "MyFont", textAlign: "center" }}> {this.props.avlBalance} TRX</div>


                        <form
                            onSubmit={(event) => {

                                event.preventDefault();

                                this.withdraw();
                            }}

                        >


                            {this.props.refLoading ? null :
                                <button type="submit" className="btn btn-success" style={investButton}>Withdraw</button>}


                        </form>
                    </div>
                    <div className="col-xl-4"></div>
                </div>

            </div >

        )
    }
}

export default MyPresentStaking
