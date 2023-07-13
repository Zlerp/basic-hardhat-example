const { ethers } = require("hardhat");

async function main() {
  const ipfsURI = 'ipfs:thisIsIPFSCID/';
  const nftContract = await ethers.deployContract("BasicNFT", [ipfsURI]);

  await nftContract.waitForDeployment();

  console.log(
    `Deployed to https://sepolia.etherscan.io/address/${nftContract.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
