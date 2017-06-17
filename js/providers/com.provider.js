var request = function(request) {
    return new Promise(function (resolve, reject) {
        var http = new XMLHttpRequest();
        http.onload = function () {
            if (this.status >= 200) {
                resolve(this.responseXML);
            } else {
                reject(this.response);
            }
        };

        http.onerror = function () {
            reject(this.response)
        };
        http.open(request.method, request.url);
        http.send();
    });
};