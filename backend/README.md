## Backend (on Development). TryOut-: [Our Demo Ai and Basic Functionality](https://huggingface.co/spaces/TaskNinja/TaskNinja)

* Instructions for setting up and running the TaskNinja backend.
*
* 1. Clone the repository.
*
* 2. Create a .env file with the following parameters:
*    - GEMINI_API_KEY: Your Gemini API key.
*    - DATABASE_URL: The URL for your PostgreSQL database.
*    - PORT: The port number for the server.
*    - STRIPE_API_KEY: Your Stripe API key.
*
* 3. In your working directory, run the following commands:
*    - virtualenv venv
*    - source venv/bin/activate
*    - pip install -r requirements.txt
*
* 4. Start the app by running the command:
*    - python aigigmatch.py
*
* Database Tables:
*
* - users: Table for storing user information.
*   - user_id: Unique identifier for each user.
*   - name: User's name.
*   - profile_name: Unique profile name for each user.
*   - about: User's description.
*   - skills: User's skills in JSON format.
*   - rating: User's rating.
*   - trust_score: User's trust score.
*   - ninja_level: User's ninja level.
*   - task_experience: User's task experience.
*   - online_status: User's online status.
*   - profile_pic: URL of user's profile picture.
*   - is_pro: Flag indicating if the user is a pro.
*
* - gig_workers: Table for storing gig worker information.
*   - id: Unique identifier for each gig worker.
*   - name: Gig worker's name.
*   - about: Gig worker's description.
*   - skills: Gig worker's skills as an array.
*   - rating: Gig worker's rating.
*   - trust_score: Gig worker's trust score.
*   - ninja_level: Gig worker's ninja level.
*   - task_experience: Gig worker's task experience.
*   - online_status: Gig worker's online status.
*   - profile_pic: URL of gig worker's profile picture.
*
* - tasks: Table for storing task information.
*   - task_id: Unique identifier for each task.
*   - user_id: Foreign key referencing the user who created the task.
*   - task_description: Description of the task.
*   - additional_info: Additional information about the task.
*   - status: Status of the task (default: 'pending').
*   - created_at: Timestamp of when the task was created.
*   - updated_at: Timestamp of when the task was last updated.
*
* - task_progress: Table for storing task progress updates.
*   - progress_id: Unique identifier for each progress update.
*   - task_id: Foreign key referencing the task being updated.
*   - update_text: Text describing the progress update.
*   - updated_at: Timestamp of when the progress update was made.
*
* Note: Before using AI interaction, make sure to populate data in the 'users' and 'gig_workers' tables.

1. Install Dependencies
bash

npm install @chainlink/contracts @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle
npm install react ethers
2. Compile the Contracts
bash

npx hardhat compile

3. Deploy the Contract
bash

npx hardhat run scripts/deploy.js --network cardano_zkEVM
