const { testRoofTop } = require('./src/testRoofTop');
require('dotenv').config();
const token = process.env.TOKEN;

testRoofTop(token)
    .then(data => { console.log(data) })