const express = require('express');
const axios = require('axios');
const app = express();

const helmet = require('helmet');
app.use(helmet());

// Define the port number
const port = process.env.PORT || 3000; // Use the environment variable PORT or default to 3000

app.get('/api/user/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const userData = response.data;
    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/user/:username/repositories', async (req, res) => {
    try {
      const { username } = req.params;
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      const repositories = response.data;
      res.json(repositories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
