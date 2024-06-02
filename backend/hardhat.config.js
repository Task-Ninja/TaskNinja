require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@chainlink/hardhat-chainlink");

module.exports = {
    solidity: "0.8.7",
    networks: {
        cardano_zkEVM: {
            url: `https://cardano-zkevm-testnet.infura.io/v3/${YOUR_INFURA_PROJECT_ID}`, 
            accounts: [`${YOUR_PRIVATE_KEY}`] 
        },
    },
};
