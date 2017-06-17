let Register = LH.registerComponent = {};

Register.init = function() {
    Page.load('pages/register/register.html').then(
        () =>  Login.load(),
        (err) => { throw err; }
    );
};

Register.load = function() {
    console.log('Register.load');


};

