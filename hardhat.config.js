require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${process.env.KOVAN_ALCHEMY_API_KEY}`,
      accounts: [`${process.env.KOVAN_PRIVATE_KEY}`]
    },
    // ropsten: {
    //   url: `https://eth-ropsten.alchemyapi.io/v2/${ROPSTEN_ALCHEMY_API_KEY}`,
    //   accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    // },
    // rinkeby: {
    //   url: `https://eth-rinkeby.alchemyapi.io/v2/${RINKEBY_ALCHEMY_API_KEY}`,
    //   accounts: [`${RINKEBY_PRIVATE_KEY}`]
    // },
    // mumbai: {
    //   url: `https://polygon-mumbai.g.alchemy.com/v2/${MUMBAI_ALCHEMY_API_KEY}`,
    //   accounts: [`${MUMBAI_PRIVATE_KEY}`]
    // },
  }
};
