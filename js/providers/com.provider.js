LH.ComProvider = {};

// Communicate with the server
LH.ComProvider.request = function(request) {
    return new Promise(function (resolve, reject) {
        let http = new XMLHttpRequest();
        let url = request.params ? request.url + '?' + request.params + '&' + request.token : request.url + '?' + request.token;

        http.onload = function () {
            if (this.status >= 200) {
                resolve(this.response);
            } else {
                reject(this.response);
            }
        };

        http.onerror = function () {
            reject(this.response)
        };
        http.open(request.method, url);
        http.send();
    });
};