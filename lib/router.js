/**
 * Created by Administrator on 2015-06-24.
 */

Router.route('/', function(){
    this.layout('layout');

    this.render('headmenu', {to:'header'});

    this.render('chat', {to:'main'});
});

Router.route('/login', function () {
    this.layout('layout');

    this.render('headmenu', {to:'header'});

    this.render('chat', {to:'main'});

    this.render('main', {to:'sub'});
});