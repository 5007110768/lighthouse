const CrudProvider = require('./crudProvider');
const DataProvider = {};

DataProvider.getToken = function(_token, callback, err) {
    console.log('DataProvider.getToken', _token);

    // TODO: CRUD request

    if (_token) callback('Here is a token');
    else err('No token for you.');

};

DataProvider.authenticate = function(emailPassHash, callback, err) {
    console.log('DataProvider.authenticate', emailPassHash);

    let _response = {
        'userId': 1,
        'firstName': 'Liam',
        'lastName': 'Neeson',
        'age': 61,
        'description': 'I dont know who you are. I dont know what you want',
        'interests': 'Killing people who hurt his daughter'
    };

    // TODO: CRUD request

    if (emailPassHash) callback(JSON.stringify(_response));
    else err('No access for you.');
};

DataProvider.getProfile = function(userId, callback, err) {
    console.log('DataProvider.getProfile', userId);

    let _response = {
        'userId': 1,
        'firstName': 'Liam',
        'lastName': 'Neeson',
        'age': 61,
        'description': 'I dont know who you are. I dont know what you want',
        'interests': 'Killing people who hurt his daughter',
        'matches':['Xena', 'Wonder Woman', 'Jessica Jones'],
        'photos':['image_01.jpg', 'image_02.jpg', 'image_03.jpg']
    };

    // TODO: CRUD request

    if (_response) callback(JSON.stringify(_response));
    else err('No access for you.');
};

DataProvider.register = function(data, callback, err) {
    console.log('DataProvider.register', data.firstName + ' ' + data.lastName);

    let _response = {
        'userId': 2,
        'firstName': 'John',
        'lastName': 'Wick',
        'age': 53,
        'description': 'Most badass of all badasses',
        'interests': 'Killing people who hurt his dog'
    };

    // TODO: CRUD request

    if (data) callback(JSON.stringify(_response));
    else err('Unable to register your account.');
};

module.exports = DataProvider;