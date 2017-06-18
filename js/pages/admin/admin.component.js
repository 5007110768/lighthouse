let Admin = LH.adminComponent = {};

Admin.init = function() {
    Page.load('pages/admin/admin.html').then(
        () =>  Login.load(),
        (err) => { throw err; }
    );
};

Admin.load = function() {
    console.log('Admin.load');


};

