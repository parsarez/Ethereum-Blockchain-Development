const path = require("path");

module.exports = {

contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "^0.6.0"
    }
  }
};
