// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract SimpleCode {

    string public message;
    address public owner; 

    constructor(string memory _message) {
        message = _message;
        owner = msg.sender;
    }

}