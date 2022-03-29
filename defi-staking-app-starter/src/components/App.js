import React from "react";
import './App.css'
import Navbar from "./Navbar"
//importing web3
import Web3 from 'web3';

class App extends React.Component {

  async UNSAFE_componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    //If in our window we detect ethereum so then we are going to create a new instance of web3 
    //We want to essentially enable it
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable()
    }else if(window.web3){//If we find web3 in our window we are going to find who our current provider is in web3
       new Web3(window.web3.currentProvider);
    }else{
      window.alert('No Ethereum browser detected! Check out Metamask')
    }
  }

  //We load blockchain data from here
  async loadBlockchainData(){
    const web3 = window.web3
    const account = await web3.eth.getAccounts()
    console.log(account)
  }

  constructor(props){
    super(props);
    this.state = {
      account: "0x0"
    }
  }

  render() {
    return(
      <div>
        <Navbar account={this.state.account}/>
        <div className="text-center">
        <h1>h1ello!</h1>
      </div>
      </div>
      
    );
  }
}

export default App;
