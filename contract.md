// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract value{
    int public val=0;
    

    function getvalue(int item) public{
        val= item;
    }
}
