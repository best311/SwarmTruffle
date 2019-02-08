
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      from:"0x838c9c729d91097dae0a89823630a77f42742313",
      gas: 4712388
    }
  }
};


// module.exports = {
//   networks: {
//     development: {
//       host: "localhost",
//       port: 8545,
//       network_id: "*"
//     }
//   }
// };


// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.0",
//       port: 8545,
//       network_id: "*" // match any network
//     }
//   }
// };
// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.0",
//       port: 8545,
//       network_id: "*" // Match any network id
//     },
//      ropsten:  {
//      network_id: 3,
//      host: "127.0.0.0",
//      port:  8545,
//      gas:   2900000
// }
//   },
//    rpc: {
//  host: '127.0.0.0',
//  post:8080
//    }
// };



// module.exports = {
//   networks: {
//     localhost: {
//       host: "localhost", 
//       port: 8546,
//       network_id: "*" 
//     },  
//     ropsten: {
//       host: "localhost",
//       port: 8545,
//       network_id: "3"
//     }
//   }
// };