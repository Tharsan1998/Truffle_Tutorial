// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract simpleStorage{
    uint a ;

    function setter(uint _a) public{
        a=_a;
    }

    function getter() public view returns(uint ){
        return a ;
    }
}