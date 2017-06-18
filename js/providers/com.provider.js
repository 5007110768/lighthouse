LH.ComProvider = {};

// Communicate with the server
LH.ComProvider.request = function(request) {
    return new Promise(function (resolve, reject) {
        let http = new XMLHttpRequest();
        let data = request.data ? request.data : null;

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
        http.open(request.method, request.url);
        http.send(data);
    });
};