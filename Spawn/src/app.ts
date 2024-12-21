import express from 'express';
import { exec } from 'child_process';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint to run the bot script
app.post('/run-bot', (req, res) => {
  exec('npm run dev', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ message: error.message });
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).json({ message: stderr });
    }
    console.log(`Stdout: ${stdout}`);
    res.json({ message: 'Bot executed successfully.' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
