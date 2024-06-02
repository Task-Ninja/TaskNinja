import React, { useState } from 'react';
import { ethers } from 'ethers';
import TaskNinjaAI from './artifacts/contracts/TaskNinjaAI.sol/TaskNinjaAI.json';

const contractAddress = "0xYourContractAddress"; // Replace with your deployed contract address

function App() {
    const [taskDescription, setTaskDescription] = useState('');
    const [taskReward, setTaskReward] = useState('');
    const [tasks, setTasks] = useState([]);

    async function createTask() {
        if (!taskDescription || !taskReward) return;
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, TaskNinjaAI.abi, signer);

        const transaction = await contract.createTask(taskDescription, ethers.utils.parseEther(taskReward));
        await transaction.wait();

        setTasks([...tasks, { description: taskDescription, reward: taskReward }]);
        setTaskDescription('');
        setTaskReward('');
    }

    return (
        <div>
            <h1>TaskNinjaAI</h1>
            <input
                type="text"
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Task Reward (ETH)"
                value={taskReward}
                onChange={(e) => setTaskReward(e.target.value)}
            />
            <button onClick={createTask}>Create Task</button>

            <h2>Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.description} - {task.reward} ETH
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
