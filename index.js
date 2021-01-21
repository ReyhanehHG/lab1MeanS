console.log('hello world');

const os = require('os');
const path = require('path');
const bcrypt = require('bcryptjs');
const fs = require('fs');

console.log(os.platform());
console.log(os.homedir());

console.log(path.basename(__filename));
// hash password
let pass = 'mypass';
bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(pass, salt, function (err, hash) {
        console.log(hash);
    });
});