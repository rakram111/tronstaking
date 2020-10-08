// var TRXMessages = artifacts.require("./TRXMessages.sol");
var TronStaking = artifacts.require("./TronStaking.sol");
//var TrxChain = artifacts.require("./TrxChain.sol");

module.exports = function (deployer) {
  // deployer.deploy(TRXMessages);
  deployer.deploy(TronStaking, "TQ9nCgHVgki3KjXUnC5Vdm3bcuNTQ4EVMY", "TMKKWtwErWh5EKNuLLVbSwGq8aKuTz4uUA");
  //deployer.deploy(TrxChain);
};
