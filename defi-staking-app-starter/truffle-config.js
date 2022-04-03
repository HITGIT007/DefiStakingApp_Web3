//We bring in babel
require('babel-register');
require('babel-polyfill');

//We are creating our export over here and then we are setting up our networks to the ganache network
//And the idea of the network is going to be whatever the network is about 
//We have our port set up to ganache 
module.exports = {
    networks:{
        development:{ 
            host: '127.0.0.1:7545',
            port: '7545',
            network_id: '*'//Connect or match to any network

        },

    },
    // Contracts Directory for info to truffle
     contracts_directory: './src/contracts/',
    // We also want to build our directories for our JSON files
    contracts_build_directory: './src/build/contracts/',
    // solidity compiler setup
    compilers:{
        solc:{ 
            version:'^0.8.0',//anything above 0.8.0
            // optimizer: { 
            //     enabled: true,
            //     runs: 200
            // },
        }
    }
}
