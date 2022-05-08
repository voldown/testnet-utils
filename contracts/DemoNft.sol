// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DemoNft is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("DemoNft", "DMN") {}

    function mintNFT(address receiver, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newDemoNftId = _tokenIds.current();
        _mint(receiver, newDemoNftId);
        _setTokenURI(newDemoNftId, tokenURI);
        _tokenIds.increment();
        return newDemoNftId;
    }
}