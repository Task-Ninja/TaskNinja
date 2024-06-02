// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract TaskNinjaAI is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    uint256 private constant ORACLE_PAYMENT = 1 * LINK_DIVISIBILITY; // Adjust based on your LINK token decimal and required fee
    string public aiResult;
    address private oracle;
    bytes32 private jobId;

    struct Task {
        string description;
        address requester;
        address[] assignedNinjas;
        uint256 reward;
        bool isCompleted;
    }

    Task[] public tasks;

    event TaskCreated(uint256 taskId, string description, address requester, uint256 reward);
    event TaskAssigned(uint256 taskId, address[] assignedNinjas);
    event TaskCompleted(uint256 taskId, address completedBy);
    event RequestFulfilled(bytes32 indexed requestId, string indexed result);

    constructor(address _oracle, bytes32 _jobId) ConfirmedOwner(msg.sender) {
        setPublicChainlinkToken();
        oracle = _oracle;
        jobId = _jobId;
    }

    function createTask(string memory description, uint256 reward) public {
        Task memory newTask = Task({
            description: description,
            requester: msg.sender,
            assignedNinjas: new address ,
            reward: reward,
            isCompleted: false
        });
        tasks.push(newTask);
        emit TaskCreated(tasks.length - 1, description, msg.sender, reward);
    }

    function requestAIAnalysis(uint256 taskId) public {
        require(taskId < tasks.length, "Task does not exist");
        Task storage task = tasks[taskId];

        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfillAIAnalysis.selector);
        req.add("get", "https://api.your-ai-service.com/analyze");
        req.add("taskDetails", task.description);

        sendChainlinkRequestTo(oracle, req, ORACLE_PAYMENT);
    }

    function fulfillAIAnalysis(bytes32 _requestId, string memory _result) public recordChainlinkFulfillment(_requestId) {
        emit RequestFulfilled(_requestId, _result);
        aiResult = _result;

        // Parse AI result and assign ninjas (simplified for this example)
        address[] memory assignedNinjas = parseAIResult(_result);
        tasks[tasks.length - 1].assignedNinjas = assignedNinjas;
        emit TaskAssigned(tasks.length - 1, assignedNinjas);
    }

    function completeTask(uint256 taskId) public {
        require(taskId < tasks.length, "Task does not exist");
        Task storage task = tasks[taskId];
        require(!task.isCompleted, "Task is already completed");
        require(isNinjaAssigned(task.assignedNinjas, msg.sender), "Caller is not assigned to this task");

        task.isCompleted = true;
        payable(msg.sender).transfer(task.reward);
        emit TaskCompleted(taskId, msg.sender);
    }

    function isNinjaAssigned(address[] memory assignedNinjas, address ninja) internal pure returns (bool) {
        for (uint256 i = 0; i < assignedNinjas.length; i++) {
            if (assignedNinjas[i] == ninja) {
                return true;
            }
        }
        return false;
    }

    function parseAIResult(string memory result) internal pure returns (address[] memory) {
        // Simplified parsing logic for example purposes
        // Assume AI result contains a list of addresses in string format
        address[] memory assignedNinjas = new address[](1);
        assignedNinjas[0] = 0x1234567890123456789012345678901234567890; // Example address
        return assignedNinjas;
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), "Unable to transfer");
    }
}
