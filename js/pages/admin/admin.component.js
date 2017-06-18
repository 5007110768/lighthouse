let Admin = LH.adminComponent = {};

Admin.init = function() {
    Page.load('pages/admin/admin.html').then(
        () =>  Admin.load(),
        (err) => { throw err; }
    );
};

Admin.load = function() {
    console.log('Admin.load');

    LH.navigation.titleBar.title = 'Admin paneel';
    LH.navigation.titleBar.allowBack = true;
    LH.navigation.titleBar.allowSettings = true;
};

