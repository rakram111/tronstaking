import React, { Component } from 'react'



let url = "https://tronstaking.cc/ref/";

export class ReferralLink extends Component {

    constructor(props) {
        super(props)

        this.state = {
            copySuccess: ''

        }

    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' });
    };

    render() {

        const colStyle = {
            backgroundImage: "linear-gradient(to right, black, #474708)", opacity: "70%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee",
        };
        const investButton = {
            display: "inline - block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "black",
            transition: ".4s", marginTop: "30px", marginLeft: "10px", marginBottom: "-22px", fontWeight: "bold", fontFamily: "MyFont", textAlign: "right", backgroundImage: "linear-gradient(to right, #FFDD00, #FBB034)", fontSize: "18px", borderRadius: "30px"


        };

        return (
            <div><br />
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={{ marginTop: "-18px", backgroundImage: "linear-gradient(to right, black, #474708)", borderRadius: "5px", color: "white", textAlign: "center", fontWeight: "bold", fontSize: "16px" }}>
                            Referral Section</div>

                        <br />
                        <div className="col-xl-12" style={{ textAlign: "center" }}>
                            <form style={{ textAlign: "center" }}>

                                <input style={{ textAlign: "center" }}
                                    ref={(textarea) => this.textArea = textarea}
                                    value={url + this.props.account} style={{ backgroundColor: "black", color: "white", width: "100%", height: "30px" }}
                                />



                            </form>
                            {
                                document.queryCommandSupported('copy') &&
                                <p style={{ float: "right" }} >
                                    <button className="btn btn-success" onClick={this.copyToClipboard} style={investButton}>Copy</button>
                                    {this.state.copySuccess}
                                </p>
                            } <br />


                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div>
        )
    }
}

export default ReferralLink
