// parse json_data.json

const fs = require('fs');
let json_data = fs.readFileSync('json_data.json');
let parsed_json = JSON.parse(json_data);
console.log(parsed_json);
