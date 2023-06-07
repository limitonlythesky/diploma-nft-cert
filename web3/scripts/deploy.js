const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const lw3PunksContract = await ethers.getContractFactory("Certificate");
  console.log("before deploy");

  // deploy the contract
  const deployedLW3PunksContract = await lw3PunksContract.deploy();
  console.log("after deploy");
  

  await deployedLW3PunksContract.deployed();

  // print the address of the deployed contract
  console.log("LW3Punks Contract Address:", deployedLW3PunksContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
