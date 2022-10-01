require("dotenv").config();

const { handler } = require(".");

handler({ apiKey: process.env.APP_KEY });
