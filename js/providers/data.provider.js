LH.DataProvider = {};

let baseURL = 'http://192.168.1.68:3000';
let _token = '';

// Requests for server
LH.DataProvider.authenticate = function(emailPassHash) {
    let request = {
        url: baseURL + '/auth',
        method: 'POST',
        data: emailPassHash,
        token: _token
    };

    return LH.ComProvider.request(request);
};

LH.DataProvider.getUserProfile = function(userId) {
    let request = {
        url: baseURL + '/profile',
        method: 'GET',
        params: userId,
        token: _token
    };

    return LH.ComProvider.request(request);
};
