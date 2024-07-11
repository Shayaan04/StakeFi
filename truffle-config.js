require("@babel/register");
require("@babel/polyfill");


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 6721975, // Set a default gas limit
      gasPrice: 20000000000 // Set a default gas price
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/truffle_abis/',
  compilers: {
    solc: {
      version: "0.8.19", // Fix the version to avoid conflicts
      optimizer: {
        enabled: true,
        runs: 200
      },
    }
  }
}
