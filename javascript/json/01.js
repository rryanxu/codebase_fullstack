const employees = [];

employees.push({
  'name': 'JohnHX',
  'salary': 9999,
  'id': 10001,
});

employees.push({
  'name': 'Rich',
  'salary': 999999,
  'id': 10002,
});

employees.push({
  'name': 'Rick',
  'salary': 8888,
  'id': 10003,
});

// The JSON.stringify() method converts a JavaScript object or value to a JSON
// string, optionally replacing values if a replacer function is specified or
// optionally including only the specified properties if a replacer array is
// specified.
console.log(JSON.stringify(employees));
// console.log(employees[0]["name"])

const fs = require('fs');
fs.writeFileSync('json_data.json', JSON.stringify(employees));
