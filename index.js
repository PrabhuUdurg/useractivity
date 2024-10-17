#!/usr/bin/env node

const axios = require('axios');
const yargs = require("yargs");

const options = yargs
    .option("u", { alias: "user", desribe: "User Name", type: "string", demandOption: true })
    .argv;

const url = `https://api.github.com/users/${options.user}/events?_last=5`;

axios
    .get(url)
    .then((res) => console.log(res.data))
    .catch(err => console.error(err));

