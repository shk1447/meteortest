/**
 * Created by Administrator on 2015-06-24.
 */

Router.route('/', {
    name: 'main'
});

Router.route('/chat', {
    name: 'chat',
    onBeforeAction: function () {
        this.next();
    }
});