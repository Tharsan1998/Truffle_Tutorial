// var simpleStorage = artifacts.require("./simpleStorage.sol");

// module.exports = function (deployer) {
//   deployer.deploy(simpleStorage);
// };

var simpleStorage = artifacts.require("./simpleStorage.sol");

module.exports = function (deployer) {
	deployer.deploy(simpleStorage)
}