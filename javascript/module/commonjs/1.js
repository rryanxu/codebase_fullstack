

// require object returns/imports the module content exported from the utils.js file
// implementation of the module
// https://github.com/nodejs/node/blob/7c63bc6540f4ad21f911f38f8708ed988f433ce7/lib/internal/modules/cjs/loader.js#L166

let utils = require('./utils')

console.log(utils.add(1,2))
