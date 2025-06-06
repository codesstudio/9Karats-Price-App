// index.js
require("dotenv").config(); // optional
const runCronJob = async () => {
  console.log("Running cron job at:", new Date().toLocaleString());

  // Your custom logic here
  // For example:
  // const response = await fetch("https://api.example.com/data");
  // const data = await response.json();
  // console.log(data);
};

runCronJob();
