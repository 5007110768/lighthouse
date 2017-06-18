// Dependencies
const http = require('http');
const url = require('url');
let sql;

const port = process.env.PORT || 3001;

// Providers
const dataProvider = require('./providers/dataProvider.js');

let server = http.createServer((req, res) => {
    let path = url.parse(req.url, true).pathname;
    let params = url.parse(req.url, true).query;

    if (req.method == 'GET') {
        console.log('params:', params);

       switch(path) {
           case '/token':
               console.log('Token');

               dataProvider.getToken('',
                   (result) => {
                       res.write(result.toJSON());
                   },
                   (err) => { console.error('Error:', err); }
               );
               break;

           case '/user-profile':
               console.log('User profile');

               dataProvider.getProfile('',
                   (result) => {
                       res.write(result.toJSON());
                   },
                   (err) => { console.error('Error:', err); }
               );
               break;
       }

        res.end();
    }

    if (req.method == 'POST') {
        console.log('data:', req.body);

        switch(path) {
            case '/auth':
                console.log('Authenticate');

                dataProvider.authenticate('',
                    (result) => {
                        res.write(result.toJSON());
                    },
                    (err) => { console.error('Error:', err); }
                );
                break;

            case '/register':
                console.log('Register');

                dataProvider.register('',
                    (result) => {
                        res.write(result.toJSON());
                    },
                    (err) => { console.error('Error:', err); }
                );
                break;
        }

    }

}).listen(port);

console.log('Running Lighthouse server on port ', port);