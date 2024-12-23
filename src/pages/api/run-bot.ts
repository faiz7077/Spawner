// /pages/api/run-bot.ts
import { exec } from 'child_process';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Execute the bot script located in the /bot folder
      exec('tsc -b && node src/bot/index.ts', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return res.status(500).json({ message: 'Bot execution failed' });
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return res.status(500).json({ message: 'Bot execution error' });
        }
        console.log(`stdout: ${stdout}`);
        return res.status(200).json({ message: 'Bot executed successfully!' });
      });
    } catch (error) {
      return res.status(500).json({ message: 'Server error during bot execution' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
