const CrudProvider = require('./crudProvider');
const DataProvider = {};

DataProvider.getToken = function(_token, callback, err) {
    console.log('DataProvider.getToken', _token);

    if (_token) callback('Here is a token');
    else err('No token for you.');

};

DataProvider.authenticate = function(emailPassHash, callback, err) {
    console.log('DataProvider.authenticate', emailPassHash);

    if (emailPassHash) callback('Welcome to your page sir');
    else err('No access for you.');
};

DataProvider.getProfile = function(userId, callback, err) {
    console.log('DataProvider.getProfile', userId);

    if (userId) callback('Welcome to this profile');
    else err('No access for you.');
};

DataProvider.register = function(request, callback, err) {
    console.log('DataProvider.register', request);

    if (request) callback('Your account was registered successfully');
    else err('Unable to register your account.');
};

module.exports = DataProvider;