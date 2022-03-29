const DecentralBank = artifacts.require('DecentralBank');

module.exports = async function issueRewards(callback) {
    let decentralBank = await DecentralBank.deployed();
    await decentralBank.issueTokens();
    console.log('Tokens have been issued successfully');
    callback();
}


//To run the scripts : truffle exec scripts/issue-tokens.js