// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.0;

interface IAaveInterfacesController {
  function handleAction(address user, uint256 totalSupply, uint256 userBalance) external;
}