# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Make sure you have [hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#installation) globally installed

Clone the repo and run:
```
git clone git@github.com:Zlerp/basic-hardhat-example.git
cd basic-hardhat-example
npm install
```


### Deployment and Verification steps:
First compile the smart contracts:
```shell
npx hardhat compile
```

Deploy to sepolia:
```shell
npx hardhat run scripts/deploy.js --network sepolia
```


Etherscan verification (Need Etherscan API for that)
```shell
npx hardhat verify --network sepolia CONTRACTADDRESS "ipfs:thisIsIPFSCID/
```

---

### Note:
You may need to run if artifacts/cache messed up:
```shell
npx hardhat clean
```
