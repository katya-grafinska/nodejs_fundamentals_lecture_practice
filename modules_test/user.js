function User(name) {
    this.name = name;
}
User.prototype.hello = function(toWho) {
    console.log('hello!', toWho.name)
}

console.log('user.js is required');

// exports.User = User;
