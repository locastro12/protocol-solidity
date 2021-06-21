/**
 * Copyright 2021 Webb Technologies
 * SPDX-License-Identifier: LGPL-3.0-only
 */

pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "../interfaces/IUpdateExecute.sol";
import "./HandlerHelpers.sol";
import "../tokens/ERC20Safe.sol";

/**
    @title Handles Anchor edge list merkle root updates
    @author Webb Technologies.
    @notice This contract is intended to be used with the Bridge contract.
 */
contract AnchorHandler is IUpdateExecute, HandlerHelpers, ERC20Safe {
    struct UpdateRecord {
        address _tokenAddress;
        uint8   _destinationChainID;
        bytes32 _resourceID;
        bytes32 _merkleRoot;
    }

    // fromChainID => height => Update Record
    mapping (uint8 => mapping(uint256 => UpdateRecord)) public _updateRecords;

    /**
        @param bridgeAddress Contract address of previously deployed Bridge.
        @param initialResourceIDs Resource IDs are used to identify a specific contract address.
        These are the Resource IDs this contract will initially support.
        @param initialContractAddresses These are the addresses the {initialResourceIDs} will point to, and are the contracts that will be
        called to perform various deposit calls.
        @dev {initialResourceIDs} and {initialContractAddresses} must have the same length (one resourceID for every address).
        Also, these arrays must be ordered in the way that {initialResourceIDs}[0] is the intended resourceID for {initialContractAddresses}[0].
     */
    constructor(
        address          bridgeAddress,
        bytes32[] memory initialResourceIDs,
        address[] memory initialContractAddresses,
        address[] memory burnableContractAddresses
    ) {
        require(initialResourceIDs.length == initialContractAddresses.length,
            "initialResourceIDs and initialContractAddresses len mismatch");

        _bridgeAddress = bridgeAddress;

        for (uint256 i = 0; i < initialResourceIDs.length; i++) {
            _setResource(initialResourceIDs[i], initialContractAddresses[i]);
        }

        for (uint256 i = 0; i < burnableContractAddresses.length; i++) {
            _setBurnable(burnableContractAddresses[i]);
        }
    }

    /**
        @param depositNonce This ID will have been generated by the Bridge contract.
        @param destId ID of chain deposit will be bridged to.
        @return UpdateRecord which consists of:
        - _tokenAddress Address used when {deposit} was executed.
        - _destinationChainID ChainID deposited tokens are intended to end up on.
        - _resourceID ResourceID used when {deposit} was executed.
        - _destinationRecipientAddress Address tokens are intended to be deposited to on desitnation chain.
        - _depositer Address that initially called {deposit} in the Bridge contract.
        - _amount Amount of tokens that were deposited.
    */
    function getUpdateRecord(uint64 depositNonce, uint8 destId) external view returns (UpdateRecord memory) {
        return _updateRecords[destId][depositNonce];
    }

    /**
        @notice An update is initiatied by making a deposit in the destination Anchor contract.
        @param destinationChainID Chain ID of chain tokens are expected to be bridged to.
        @param depositNonce This value is generated as an ID by the Bridge contract.
        @param merkleRoot The merkle root update for a target Anchor edge.
        @param data Consists of: {resourceID}, {amount}, {lenRecipientAddress}, and {recipientAddress}
        all padded to 32 bytes.
        @notice Data passed into the function should be constructed as follows:
        amount                      uint256     bytes   0 - 32
        recipientAddress length     uint256     bytes  32 - 64
        recipientAddress            bytes       bytes  64 - END
        @dev Depending if the corresponding {tokenAddress} for the parsed {resourceID} is
        marked true in {_burnList}, deposited tokens will be burned, if not, they will be locked.
     */
    function update(
        bytes32 resourceID,
        uint8   destinationChainID,
        uint64  depositNonce,
        bytes32 merkleRoot,
        bytes   calldata data
    ) external override onlyBridge {
        bytes   memory recipientAddress;
        uint256        amount;
        uint256        lenRecipientAddress;

        (amount, lenRecipientAddress) = abi.decode(data, (uint, uint));
        recipientAddress = bytes(data[64:64 + lenRecipientAddress]);

        address anchorAddress = _resourceIDToTokenContractAddress[resourceID];
        require(_contractWhitelist[anchorAddress], "provided tokenAddress is not whitelisted");

        _updateRecords[destinationChainID][depositNonce] = UpdateRecord(
            anchorAddress,
            destinationChainID,
            resourceID,
            merkleRoot
        );
    }

    /**
        @notice Proposal execution should be initiated when a proposal is finalized in the Bridge contract.
        by a relayer on the deposit's destination chain.
        @param data Consists of {resourceID}, {amount}, {lenDestinationRecipientAddress},
        and {destinationRecipientAddress} all padded to 32 bytes.
        @notice Data passed into the function should be constructed as follows:
        amount                                 uint256     bytes  0 - 32
        destinationRecipientAddress length     uint256     bytes  32 - 64
        destinationRecipientAddress            bytes       bytes  64 - END
     */
    function executeProposal(bytes32 resourceID, bytes calldata data) external override onlyBridge {
        uint256       amount;
        uint256       lenDestinationRecipientAddress;
        bytes  memory destinationRecipientAddress;

        (amount, lenDestinationRecipientAddress) = abi.decode(data, (uint, uint));
        destinationRecipientAddress = bytes(data[64:64 + lenDestinationRecipientAddress]);

        bytes20 recipientAddress;
        address tokenAddress = _resourceIDToTokenContractAddress[resourceID];

        assembly {
            recipientAddress := mload(add(destinationRecipientAddress, 0x20))
        }

        require(_contractWhitelist[tokenAddress], "provided tokenAddress is not whitelisted");
        // TODO: Implement update logic for executing an update proposal
    }

    /**
        @notice Used to manually release ERC20 tokens from ERC20Safe.
        @param tokenAddress Address of token contract to release.
        @param recipient Address to release tokens to.
        @param amount The amount of ERC20 tokens to release.
     */
    function withdraw(address tokenAddress, address recipient, uint amount) external override onlyBridge {
        releaseERC20(tokenAddress, recipient, amount);
    }
}
