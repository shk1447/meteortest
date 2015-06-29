/**
 * Created by Administrator on 2015-06-24.
 */

Router.route('home',{
    path:'/',
    layoutTemplate:'layout',
    action:function(){
        // this is an instance of RouteController
        // access to:
        //  this.layout
        //  this.params
        //  this.wait
        //  this.render
        //  this.stop
        //  this.redirect
        //this.render('header', {to:'header'});
        //this.render('posts', {to:'main'});
        //this.render('', {to:'sub'})
        this.render();
    },
    yieldTemplates:{
        header:{to:'header'},
        'posts':{to:'main'},
        '':{to:'sub'}
    },
    data:function(){
        var count = postsCollection.find().count();

        return postsCollection.find({}, {sort: {createAt:1}, skip:count-40});
    },
    waitOn: function () {
        // url처리 이전에 하는 행동(data보다 먼저 호출됨)
        console.log('testtest');
    }
});

Router.route('login',{
    path:'/login',
    layoutTemplate:'layout',
    action: function () {
        this.render('header', {to:'header'});

        this.render('posts', {to:'main'});

        this.render('login', {to:'sub'});
    }
});

Router.route('join', {
    path:'/join',
    layoutTemplate:'layout',
    action: function () {

        this.render('header', {to:'header'});

        this.render('join', {to:'main'});

        this.render('', {to:'sub'});
    }
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

Router.route('postpage', {
    path:'/postpage/:id',
    layoutTemplate:'layout',
    action:function() {
        console.log(this.params.id);
        this.render();
    }
});