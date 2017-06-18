let HTMLimporter = function(rootElement, rootDir) {
    this.load = function(path) {
        return new Promise(function (resolve, reject) {
            let http = new XMLHttpRequest();

            http.onload = function () {
                if (this.status >= 200) {

                    let injectable = document.getElementById(rootElement);
                    let parse = new DOMParser();
                    let templateDocument = parse.parseFromString(this.response, 'text/html').documentElement;
                    let template = templateDocument.getElementsByTagName('body')[0].firstElementChild;

                    if (!template) return;

                    // Clear target element before injecting new template
                    injectable.innerHTML = null;

                    injectable.insertBefore(template, injectable.firstElementChild);

                    resolve('Template loaded');
                } else {
                    reject(this.response);
                }
            };

            http.onerror = function () {
                reject(this.response);
            };

            http.open('GET', rootDir + path);
            http.send();
        });
    };
};

