LH.DataProvider = {};

let baseURL = 'http://localhost:3001';
let _token = localStorage.getItem('token') || 'MySpecialToken';

// Requests for server
LH.DataProvider.getToken = function() {
    let request = {
        url: baseURL + '/token',
        method: 'GET'
    };

    return LH.ComProvider.request(request);
};


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
