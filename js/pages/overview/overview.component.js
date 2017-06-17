let Overview = LH.overviewComponent = {};

Overview.init = function() {
    Page.load('pages/overview/overview.html').then(
        () =>  Overview.load(),
        (err) => { throw err; }
    );
};

Overview.load = function() {
    console.log('Overview.load');

    let test = new Vue({
        el: '#overview',
        data: {
            test: 'Hallo'
        }
    });
};

