import React from "react";
import "./App.css";
import Navbar from "./Navbar";
//importing web3
import Web3 from "web3";
import Tether from "../build/contracts/Tether.json";

class App extends React.Component {
  async UNSAFE_componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    //If in our window we detect ethereum so then we are going to create a new instance of web3
    //We want to essentially enable it
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      //If we find web3 in our window we are going to find who our current provider is in web3
      new Web3(window.web3.currentProvider);
    } else {
      window.alert("No Ethereum browser detected! Check out Metamask");
    }
  }

  //We load blockchain data from here
  async loadBlockchainData() {
    const web3 = window.web3;
    const account = await web3.eth.getAccounts();
    this.setState({ account: account[0] });
    const networkId = await web3.eth.net.getId();
    console.log(networkId, "Network ID");
    //Load Tether Contract
    const tetherData = Tether.networks[networkId];
    if (tetherData) {
      const tether = new web3.eth.Contract(Tether.abi, tetherData.address);
      //Setting the state to tether above
      this.setState({ tether });
      let tetherBalance = await tether.methods.balanceOf(this.state.account).call();
      this.setState({tetherBalance: tetherBalance.toString() });
      console.log({balance:tetherBalance})
    }else{
      window.alert('Error! Teher contract not deployed - no detected network!')
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
      tether: {},
      rwd: {},
      decentralBank: {},
      tetherBalance: "0",
      rwdBalance: "0",
      stakingBalance: "0",
      loading: true,
    };
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="text-center">
          <h1>hello!</h1>
        </div>
      </div>
    );
  }
}

export default App;
