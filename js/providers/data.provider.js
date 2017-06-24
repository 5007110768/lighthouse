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

// Check if user is logged in / has active token; if true, redirect to target otherwise redirect to login
LH.DataProvider.isLoggedIn = function(userId) {
    return new Promise((resolve, reject) => {

        if (!LH.DataProvider.tokenIsValid()) {
            alert('Token expired, please log in again');
            nav.navigate('#/login');
            reject('Token expired');
        }

        if (!LH.DataProvider.activeUser) LH.DataProvider.loadActiveUser();

        if (!LH.DataProvider.activeUser.isAllowedAccess(userId)) {
            alert('You do not have permission to view this page');
            nav.navigate('#/profile/' + LH.DataProvider.activeUser.id);
            reject('No permission to view page');
        }

        resolve('User is logged in');

    });
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

// Change account settings
LH.DataProvider.changeAccountSettings = function(data) {
    let request = {
        url: baseURL + '/change-account-settings',
        method: 'POST',
        data: JSON.stringify(data)
    };

    return LH.ComProvider.request(request);
};

// Delete account
LH.DataProvider.deleteAccount = function(userId) {
    let request = {
        url: baseURL + '/delete-account?userId=' + userId,
        method: 'GET'
    };

    return LH.ComProvider.request(request);
};
