// var TRXMessages = artifacts.require("./TRXMessages.sol");
var TronStaking = artifacts.require("./TronStaking.sol");
//var TrxChain = artifacts.require("./TrxChain.sol");

module.exports = function (deployer) {
  // deployer.deploy(TRXMessages);
  deployer.deploy(TronStaking,
    "TCFcvCxB1QWitMQjHqabQfipXT8FbAbSQV",
    "TJ9SH61YEPmtsdSLvCv5QzJUp6NFfcyfQX",
    "TQ9nCgHVgki3KjXUnC5Vdm3bcuNTQ4EVMY");
  //deployer.deploy(TrxChain);
};
