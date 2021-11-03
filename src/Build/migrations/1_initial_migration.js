const Migrations = artifacts.require("NetShop");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
