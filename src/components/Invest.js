import React, { Component } from 'react'
import Utils from '../utils';

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./css/bootstrap.css";

toast.configure();

export class Invest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,

        }

        this.button50 = this.button50.bind(this);
        this.button500 = this.button500.bind(this);
        this.button1000 = this.button1000.bind(this);
        this.button10k = this.button10k.bind(this);
        this.button50k = this.button50k.bind(this);
        this.button100k = this.button100k.bind(this);
        this.button500k = this.button500k.bind(this);
        this.invest = this.invest.bind(this);
        this.reset = this.reset.bind(this);

    }

    async invest(refid, amount) {
        await Utils.contract
            .invest(refid)
            .send({
                from: this.state.account,
                callValue: Number(amount) * 1000000,
            }).then(res => toast.success(amount + ' TRX Deposit processing', { position: toast.POSITION.TOP_RIGHT, autoClose: 10000 })

            ).then(res => {
                window.location = "/";
            });


    }


    button50(event) {
        this.setState({ count: this.state.count + 10 });
    }

    button500(event) {
        this.setState({ count: this.state.count + 500 });
    }

    button1000(event) {
        this.setState({ count: this.state.count + 1000 });
    }

    button10k(event) {
        this.setState({ count: this.state.count + 10000 });
    }

    button50k(event) {
        this.setState({ count: this.state.count + 50000 });
    }

    button100k(event) {
        this.setState({ count: this.state.count + 100000 });
    }

    button500k(event) {
        this.setState({ count: this.state.count + 500000 });
    }

    reset(event) {
        this.setState({ count: 0 });
    }

    render() {

        const colStyle = {
            backgroundImage: "linear-gradient(to right, black, #474708)", opacity: "70%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee",
        };

        const addButton = {
            display: "inline - block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "#FFF",
            transition: ".4s", marginTop: "10px", marginLeft: "10px", marginBottom: "10px", fontWeight: "3px", border: "3px solid white", backgroundColor: "black"

        }

        const investButton = {
            display: "inline - block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "black",
            transition: ".4s", marginTop: "30px", marginLeft: "10px", marginBottom: "-22px", fontWeight: "bold", fontFamily: "MyFont", textAlign: "right", backgroundImage: "linear-gradient(to right, #FFDD00, #FBB034)", fontSize: "18px", borderRadius: "30px"


        };

        const resetButton = {
            display: "inline - block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "#FFF",
            transition: ".4s", marginTop: "10px", marginLeft: "10px", marginBottom: "10px", fontWeight: "3px", border: "3px solid white", backgroundColor: "red", fontSize: "18px",


        };

        return (
            <div><br />
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={{ marginTop: "-18px", backgroundImage: "linear-gradient(to right, #474708, blue)", borderRadius: "5px", color: "white", textAlign: "center", fontWeight: "bold", fontSize: "19px" }}>
                            Invest Section</div>

                        <br />
                        <div className="col-xl-12" style={{ textAlign: "center" }}>
                            <form
                                onSubmit={(event) => {

                                    event.preventDefault();
                                    const refid = this.props.refid;
                                    const amount = this.state.count;

                                    if (amount >= 10) {
                                        this.invest(refid, amount);

                                    } else {
                                        toast.error("Min deposit is 50 TRX");
                                    }


                                }}

                            >
                                <input type="text" style={{ backgroundColor: "#000", borderRadius: "2px", height: "50px", color: "White", fontSize: "25px", paddingLeft: "30px", border: "4px solid white", width: "100%" }} value={this.state.count} /> <br /><br />


                                <a href="#q" className="btn btn-primary" style={addButton} onClick={this.button50}>+10</a>

                                <a href="#q" className="btn btn-primary" style={addButton} onClick={this.button500}>+500</a>

                                <a href="#q" className="btn btn-primary" style={addButton} onClick={this.button1000}>+1000</a>

                                <a href="#q" className="btn btn-primary" style={addButton} onClick={this.button10k}>+10 k</a>

                                <a href="#q" className="btn btn-primary" style={addButton} onClick={this.button50k}>+50 k</a>
                                <a href="#q" className="btn btn-primary" style={addButton} onClick={this.button100k}>+100 k</a>
                                <a href="#q" className="btn btn-primary" style={addButton} onClick={this.button500k}>+500 k</a>
                                <a href="#q" className="btn btn-primary" style={resetButton} onClick={this.reset}>Reset</a><br />


                                {this.props.refLoading ? null :
                                    <button type="submit" className="btn btn-success" style={investButton}>Start Staking</button>}


                            </form>


                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div>
        )
    }
}

export default Invest
