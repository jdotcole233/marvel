
const axios = require('axios');
const md5 = require('md5');
const prompt = require('prompt-sync')({sigint: true});

const axios_instance = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/",
  headers: {accept: 'application/json'}
});

const PUBLIC_KEY = "ee6c172d393c1c2d88c9e16f76f0a768";
const PRIVATE_KEY = "a5c74dab1944f86ab95a8ac5eedbae85b792e9c5";
const current_timestamp = new Date().getTime();
const HASH = md5(`${current_timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);


const MENU = ['Stories','Comics','Events','Series', 'Characters'];
let isFound = false;
let option = '';

do {
    console.log("Welcome to the amazing marvel universe. :)");
    console.log("You can list by the following:");
    MENU.forEach((menu, index) => console.log(index + 1, menu));
    option = prompt("Enter your choice > ");

    const menu_create = MENU.map((menu, index) => menu.toLowerCase());
    isFound = menu_create.includes(option.toLowerCase());
} while (!isFound);

console.log(`${option} Loading...`);
axios_instance
  .get(option.toLowerCase(), {
      params: {
        apikey: PUBLIC_KEY,
        ts: current_timestamp,
        hash: HASH
      },
  })
  .then((res) => {
    res.data.data.results.map((comic, index) => console.log((index + 1) , comic.description));
    console.log(`${option} Loading finished.`);
    console.log("Finised loading in comics");
  })
  .catch((err) => {
    console.log(err);
  });
