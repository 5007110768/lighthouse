LH.DataProvider = {};

let self = this;
let baseURL = 'http://localhost:3001';
let _token;

LH.DataProvider.activeUser = null;

LH.DataProvider.loadActiveUser = function() {
    let data = JSON.parse(localStorage.getItem('user'));
    LH.DataProvider.activeUser = new User();
    LH.DataProvider.activeUser.id = data.id;
    LH.DataProvider.activeUser.permission = data.permission;
};

LH.DataProvider.saveActiveUser = function() {
    localStorage.setItem('user', JSON.stringify(LH.DataProvider.activeUser));
    LH.DataProvider.loadActiveUser();
};


LH.DataProvider.loadToken = function() {
    _token = localStorage.getItem('token');
};

LH.DataProvider.saveToken = function(_token) {
    localStorage.setItem('token', _token);
    LH.DataProvider.loadToken();
};

LH.DataProvider.tokenIsValid = function() {
    LH.DataProvider.loadToken();
    if (!_token) return false;

    let tokenInMs = parseInt(atob(_token));
    let now = new Date().getTime();
    let expiration = 3600*24*7*1000; // 7 days
    console.log('tokenInMs: ' + tokenInMs);
    if ((tokenInMs + expiration) > now) return true;

    return false;
};



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
