"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
// /pages/api/run-bot.ts
const child_process_1 = require("child_process");
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.method === 'POST') {
            try {
                // Execute the bot script located in the /bot folder
                (0, child_process_1.exec)('tsc -b && node src/bot/index.ts', (error, stdout, stderr) => {
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
            }
            catch (error) {
                return res.status(500).json({ message: 'Server error during bot execution' });
            }
        }
        else {
            res.status(405).json({ message: 'Method Not Allowed' });
        }
    });
}
