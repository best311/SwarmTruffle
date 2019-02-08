// var swarmmail =  artifacts.require("./swarmmaildata.sol");
var Emailstore = artifacts.require("./emailstore.sol");
module.exports = function(deployer) {
  // deployer.deploy(Emailstore,[0], {gas:3000000});
  // deployer.deploy(keeplog);
  deployer.deploy(Emailstore);
  // deployer.deploy(Getdata);
};



