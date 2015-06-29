/**
 * Created by Administrator on 2015-06-24.
 */

Router.route('/', function(){
    this.layout('layout');

    this.render('header', {to:'header'});

    this.render('posts', {to:'main'});

    this.render('', {to:'sub'})
});

Router.route('/login', function () {
    this.layout('layout');

    this.render('header', {to:'header'});

    this.render('posts', {to:'main'});

    this.render('login', {to:'sub'});
});

Router.route('/join', function () {
    this.layout('layout');

    this.render('header', {to:'header'});

    this.render('join', {to:'main'});

    this.render('', {to:'sub'});
});

Router.route('/remove', function () {
    Router.go('/');
});

Router.route('/manageusers', function(){
    this.layout('layout');

    this.render('header', {to:'header'});

    this.render('users', {to:'main'});

    this.render('', {to:'sub'});
});