require("dotenv").config();
const debug = require("debug")("kinds:server:controllers");
const chalk = require("chalk");
const Kind = require("../../database/models/Kind");

const listKinds = async (req, res) => {
  debug(chalk.greenBright("Kind-List request received"));
  const kinds = await Kind.find();
  res.status(200).json(kinds);
};

module.exports = listKinds;
