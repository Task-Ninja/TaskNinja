const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const TaskNinjaAI = await hre.ethers.getContractFactory("TaskNinjaAI");

    const oracle = "0xYourOracleAddress"; // Replace with your Oracle address
    const jobId = "0xYourJobId"; // Replace with your Job ID

    const taskNinjaAI = await TaskNinjaAI.deploy(oracle, jobId);

    await taskNinjaAI.deployed();
    console.log("TaskNinjaAI deployed to:", taskNinjaAI.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
