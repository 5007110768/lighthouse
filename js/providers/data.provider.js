LH.DataProvider = {};

let baseURL = 'http://localhost:3001';
let _token = localStorage.getItem('token') || 'MySpecialToken';

LH.DataProvider.data = JSON.parse(localStorage.getItem('_tmpData')) || {};

// Requests for server
LH.DataProvider.getToken = function() {
    let request = {
        url: baseURL + '/token',
        method: 'GET'
    };

    return LH.ComProvider.request(request);
};

// Returns current user
LH.DataProvider.authenticate = function(hash) {
    let request = {
        url: baseURL + '/auth' + '?token=' + _token,
        method: 'POST',
        data: hash
    };

    return LH.ComProvider.request(request);
};

// Create user object on server
LH.DataProvider.register = function(data) {
    let request = {
      url: baseURL + '/register',
      method: 'POST',
      data: JSON.stringify(data)
    };

    return LH.ComProvider.request(request);
};

// Returns any user
LH.DataProvider.getUserProfile = function(userId) {
    let request = {
        url: baseURL + '/user-profile?userId=' + userId + '&token=' + _token,
        method: 'GET'
    };

    return LH.ComProvider.request(request);
};
