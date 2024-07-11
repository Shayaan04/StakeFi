// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.19;
import './RWD.sol';
import './Tether.sol';

contract DecentralBank {
    string public name = 'Decentral Bank';
    address public owner;
    Tether public tether;
    RWD public rwd;

    address public stakers;

    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaked;

constructor(RWD _rwd, Tether _tether) {
    owner = msg.sender;
    rwd = _rwd;
    tether = _tether;
}

function depositTokens(uint _amount) public {
    tether.transferFrom(msg.sender, address(this), _amount);

    stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;


}
}
