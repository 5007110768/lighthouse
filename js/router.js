// Define routes / bootstrap app
let routes = {
    '/': function(){
        Overview.init();
    },
    '/profile': function() {
        Profile.init();
    }
};

Router(routes).init();