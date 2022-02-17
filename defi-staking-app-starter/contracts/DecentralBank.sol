
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
//This is a decentral bank which will be taking both our reward tokens and our tether tokens and interacting
//Digital Bank functionality for our users, our customers, our investors
//Inside our digital bank we want to have access to the tether tokens, and we bascially want to
//be able to keep track of these and then be able to issue tokens, reward tokens and keep track of the state,
//take the deposits, be able tyo accept deposits and withdrawls

import './RWD.sol';
import './Tether.sol';


contract DecentralBank {
    string public name = "Decentral Bank";
    address public owner;
    Tether public tether;
    RWD public rwd;

    constructor(RWD _rwd, Tether _tether) public{
        rwd = _rwd;
        tether = _tether;
    }//We are doing this because it is important to wire the smart contracts with each other

}