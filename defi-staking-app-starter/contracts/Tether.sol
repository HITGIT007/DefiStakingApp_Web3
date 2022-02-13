// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Tether {
    string public name = "Tether";
    string public symbol = "USDT";
    uint256 public totalSupply = 1000000000000000000000000; //1 million tokens
    uint8 public decimals = 18;

    event Transfer(
        address indexed _from, 
        address indexed _to, 
        uint _value
        );
    //These addresses are going to be indexed, because it essentially allows us to filter
    
    event Approve(
        address indexed _owner, 
        address indexed _spender, 
        uint _value
        );
    //Approval always has to come from the owner

    //Now we are going to use some mapping to keep tract of the balance for when we are transferring and when we are updating,
    //It is very important to have that

    mapping(address => uint256) public balanceOf;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
        //This means that the supply will be the total amount of Tether
        //And by doing that we were able to do transfers and approve to do transfers to and from and keep track of the balance in contract
    }

    //Logic for the function Transfer
    function transfer(address _to, uint256 _value) public returns (bool success)
    {   
        //transfer amount less than total amount of Tether
        require(balanceOf[msg.sender]>= _value);

        balanceOf[msg.sender] = balanceOf[msg.sender] - _value;
        //This means whatever the balance is going to be that same balance when we make a transfer minus the value of the amount we are transferring

        //balance of receiver is going to increase
        balanceOf[_to] += _value;
        
        //emit event
        emit Transfer(_from, _to, _value);
        return true;

    }
}
