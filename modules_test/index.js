var user = require('./user');
// var org = require('./organization');
// console.log(org.orgName);
// var data = require('./data');
// console.log(data.hello);

var ivan = new user.User('ivan');
var roma = new user.User('roma');

ivan.hello(roma);
