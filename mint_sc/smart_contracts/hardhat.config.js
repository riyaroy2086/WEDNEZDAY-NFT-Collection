require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
// require("@nomiclabs/hardhat-waffle")
require("dotenv").config();

// /** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    matic: {
      url: process.env.POLYGON_API,
      accounts: [process.env.PRIVATE_KEY]
    },
    mumbai : {
      url: process.env.MUMBAI_API,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      polygon: process.env.POLYGONSCAN_API
    }
  }
};