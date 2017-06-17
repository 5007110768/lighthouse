let Overview = LH.overviewComponent = {};

Overview.init = function() {
    Page.load('app', 'pages/overview/overview.html').then(
        () =>  Overview.load(),
        (err) => { throw err; }
    );
};

Overview.load = function() {
    console.log('Load overview page');

    let test = new Vue({
        el: '#overview',
        data: {
            test: 'Hallo'
        }
    });
};

