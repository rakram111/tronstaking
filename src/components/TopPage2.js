import React, { Component } from 'react';
import { toast } from 'react-toastify';
import back from "./Image1/back.png"
import TronWeb from 'tronweb';
import Utils from '../utils';
import PersonalStats2 from "./PersonalStats2";
import TeamBiz from "./TeamBiz";

import 'react-toastify/dist/ReactToastify.css';
import "./css/style.css";

let url = "https://tronstaking.cc/";
// '
let contract_address = 'TLxbzm6DqP3kaKrB3mqGDbwLLaXSJgGQHn';

toast.configure();


class TopPage2 extends Component {

    async componentDidMount() {

        await this.connectTronWeb();
        await this.loadBlockChainData();

    }

    connectTronWeb = async () => {
        await new Promise(resolve => {
            const tronWebState = {
                installed: window.tronWeb,
                loggedIn: window.tronWeb && window.tronWeb.ready
            };

            if (tronWebState.installed) {
                this.setState({
                    tronWeb:
                        tronWebState
                });
                return resolve();
            }

            let tries = 0;

            const timer = setInterval(() => {
                if (tries >= 10) {
                    const TRONGRID_API = 'https://api.trongrid.io';

                    window.tronWeb = new TronWeb(
                        TRONGRID_API,
                        TRONGRID_API,
                        TRONGRID_API
                    );

                    this.setState({
                        tronWeb: {
                            installed: false,
                            loggedIn: false
                        }
                    });

                    clearInterval(timer);
                    return resolve();
                }

                tronWebState.installed = !!window.tronWeb;
                tronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;

                if (!tronWebState.installed)
                    return tries++;

                this.setState({
                    tronWeb: tronWebState
                });

                resolve();
            }, 100);
        });

        if (!this.state.tronWeb.installed) {
            toast.error("Tron blockchain support not enabled, Try using Token Pocket/ Tron Wallet for Mobile OR Tron Link chrome extension for PC");
        }



        if (!this.state.tronWeb.loggedIn) {
            window.tronWeb.on('addressChanged', () => {
                this.setState({
                    tronWeb: {
                        installed: true,
                        loggedIn: true
                    }
                });
            });
        }


        await Utils.setTronWeb(window.tronWeb);
    }

    loadBlockChainData = async () => {

        // Global Stats
        const sunny = 1000000;

        const dailyRate = await Utils.contract.getContractPlusBaseRate().call();
        this.setState({ dailyRate: (Number(dailyRate) / 100).toFixed(2) });

        await Utils.contract.getAdmin().call().then(res => {

            this.setState({ owner: window.tronWeb.address.fromHex(res) });
            this.setState({ owner1: res });

        })

        if (this.props.refLinkid) {
            this.setState({ account: this.props.refLinkid });
        }

        // // console.log("refid " + this.state.refid);

        this.setState({ refLoading: false });


        // const accTemp = await Utils.tronWeb.defaultAddress.base58;
        // this.setState({ account1: accTemp });
        // this.setState({ account: this.state.refid });
        this.setState({ walletload: false });


        // const balTemp = await Utils.tronWeb.trx.getBalance(accTemp);
        // const ballTemp = balTemp / sunny;
        // this.setState({ balance: ballTemp });
        this.setState({ balanceload: false });

        const contractBalance = await Utils.contract.getContractBalance().call();
        this.setState({ contractBalance: contractBalance / sunny });

        const totalUsers = await Utils.contract.totalUsers().call();
        this.setState({ totalUsers: Number(totalUsers) });

        const totalInvested = await Utils.contract.totalInvested().call();
        this.setState({ totalInvested: Number(totalInvested) / sunny });

        const totalWithdrawn = await Utils.contract.totalWithdrawn().call();
        this.setState({ totalWithdrawn: Number(totalWithdrawn) / sunny });

        const totalDeposits = await Utils.contract.totalDeposits().call();
        this.setState({ totalDepositCount: Number(totalDeposits) });

        let subAccountstr = this.state.account.toString();
        let subAccount = subAccountstr.substring(0, 8);
        this.setState({ subAccount });

        let contractStr = contract_address.toString();
        let subContract = contractStr.substring(0, 8);
        this.setState({ subContract });

        // console.log('sub contract ' + this.state.subContract)
        // console.log(' contract ' + contractStr)
        // // console.log('show acc str ' + showacc);
        const isTop = await Utils.contract.getUserIsTop(this.state.account).call();
        this.setState({ isTop: Number(isTop) });
        // console.log('is top ' + isTop);
        /////////////////////////////////////////////////////////////////////////////
        const userInfo = await Utils.contract.userInfo(this.state.account).call();
        // console.log(userInfo);

        this.setState({ upline: window.tronWeb.address.fromHex(userInfo.upline) });
        this.setState({ subUpline: this.state.upline.toString().substring(0, 8) });

        this.setState({ ref_bonus: Number(userInfo.ref_bonus) / sunny });
        this.setState({ bonus_rem: Number(userInfo.bonus_rem) / sunny });
        this.setState({ id: Number(userInfo.id) });
        this.setState({ teambiz: Number(userInfo.teambiz) / sunny });
        this.setState({ checkpoint: Number(userInfo.checkpoint) });
        this.setState({ now: Number(userInfo.timenow) });

        const CONTRACT_BALANCE_STEP = await Utils.contract.CONTRACT_BALANCE_STEP().call();
        this.setState({ contract_step: Number(CONTRACT_BALANCE_STEP) / sunny });

        const PERCENTS_DIVIDER = await Utils.contract.PERCENTS_DIVIDER().call();
        this.setState({ percent_divider: Number(PERCENTS_DIVIDER) });

        const time_step = await Utils.contract.TIME_STEP().call();
        this.setState({ time_step: Number(time_step) });
        console.log('time step ' + this.state.time_step);

        // console.log(hold_bonus)

        var contract_bonus = (Math.floor((this.state.contractBalance / this.state.contract_step)) / 100).toFixed(2);
        if (contract_bonus >= 3) {
            contract_bonus = 3;
        }
        //    const contract_bonus = Number(contract_bonus1 / 100).toFixed(2);
        this.setState({ contract_bonus: Number(contract_bonus).toFixed(2) });
        const userTotalDeposit = await Utils.contract.getUserTotalDeposits(this.state.account).call();
        this.setState({ userTotalDeposit: Number(userTotalDeposit) / sunny });

        const userStatus = await Utils.contract.getUserStatus(this.state.account).call();
        this.setState({ userStatus: Number(userStatus) });

        const avlBalance = await Utils.contract.getUserAvailableBalance(this.state.account).call();
        this.setState({ avlBalance: Number(Number(avlBalance) / sunny).toFixed(5) });
        console.log(this.state.avlBalance)


        const dividends = await Utils.contract.getUserDividends(this.state.account).call();
        this.setState({ dividends: Number(dividends) / sunny });

        const totalRate = await Utils.contract.getTotalRate(this.state.account).call();
        this.setState({ totalRate: (Number(totalRate) / 100).toFixed(2) });
        console.log('hekeko');
        var hold_bonus = 1;
        this.setState({ hold_bonus });
        console.log('cehck ' + this.state.hold_bonus);

        hold_bonus = Number(this.state.totalRate - 1 - this.state.contract_bonus).toFixed(2);

        const num1 = 1;
        if (hold_bonus >= 1) {
            hold_bonus = Number(num1).toFixed(2);
        }
        this.setState({ hold_bonus });
        console.log('cehck 1' + this.state.hold_bonus);

        const userDepositCount = await Utils.contract.getUserDepositCount(this.state.account).call();
        this.setState({ userDepositCount: Number(userDepositCount) });
        console.log('user deposit ' + this.state.userDepositCount)
        const userTotalWithdrawn = await Utils.contract.getUserTotalWithdrawn(this.state.account).call();
        this.setState({ userTotalWithdrawn: Number(Number(userTotalWithdrawn) / sunny).toFixed(2) });
        const lucky_bonus = await Utils.contract.getUserLuckyBonus(this.state.account).call();
        this.setState({ lucky_bonus: Number(lucky_bonus) / sunny });


        const dividends_withdrawn = Number(this.state.userTotalWithdrawn + this.state.bonus_rem
            - this.state.ref_bonus).toFixed(5);
        this.setState({ dividends_withdrawn });
        console.log('contract - ' + this.state.upline);
        // console.log('account - ' + this.state.account);
        // console.log('owner - ' + this.state.owner);
        console.log('link refid - ' + this.state.refid);


    }


    constructor(props) {
        super(props)

        this.state = {

            refLoading: true,
            walletload: true,
            balanceload: true,
            totalInvestmentLoad: true,
            playerStatus: "In Active",
            boostStatus: "In Active",

            account: '',
            totalMembers: 0,
            totalBiz: 0,
            directBiz: 0,
            balance: 0,
            refFlag: 0,
            totalInvested: 0,

            lastDepositTime: 0,
            depositCount: 0,

            copySuccess1: false,

            tronWeb: {
                installed: false,
                loggedIn: false
            },
        }

    }

    render() {
        const backStyle = {
            backgroundImage: `url(${back})`, backgroundAttachment: "fixed", fontFamily: "MyFont"
            , height: "auto", width: "100%", margin: "0", backgroundPosition: "center", overflow: "hidden", marginTop: "-30px"
        };
        // backgroundImage: `url(${back})`, backgroundColor: "blue",

        return (
            <div>
                <div>
                    <p></p>
                </div>
                <div style={backStyle}>
                    <div style={{ textAlign: "center", paddingTop: "40px" }}>
                        <a href={url} >  <img src={require("./Image1/logo.png")} alt="Logo" width="600px" /></a>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>

                    <TeamBiz
                        teambiz={this.state.teambiz}
                    />
                    <PersonalStats2
                        account={this.state.account}
                        subAccount={this.state.subAccount}
                        upline={this.state.upline}
                        subUpline={this.state.subUpline}
                        dividends={this.state.dividends}
                        userTotalDeposit={this.state.userTotalDeposit}
                        totalRate={this.state.totalRate}
                        avlBalance={this.state.avlBalance}
                        bonus_rem={this.state.bonus_rem}
                        ref_bonus={this.state.ref_bonus}
                        lucky_bonus={this.state.lucky_bonus}
                        userTotalWithdrawn={this.state.userTotalWithdrawn}
                        teambiz={this.state.teambiz}
                        isTop={this.state.isTop}
                    />


                    <div style={{ paddingBottom: "30px" }}></div>
                </div>
            </div >
        );
    }
}
export default TopPage2;
