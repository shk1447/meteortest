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
        var retrunvalue = {num:1, keyword:''};
        return retrunvalue;
    },
    waitOn: function () {
    }
});

Router.route('posts',{
    path:'/posts/:pagenum',
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
        var returnvalue = {num:this.params.pagenum, keyword:''};
        return returnvalue;
    },
    waitOn: function () {
    }
});

Router.route('postas',{
    path:'/posts/:pagenum/:key',
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
        var returnvalue = {num:this.params.pagenum, keyword:this.params.key};
        return returnvalue;
    },
    waitOn: function () {
    }
});

Router.route('login',{
    path:'/login',
    layoutTemplate:'layout',
    yieldTemplates:{
      header:{to:'header'},
        posts:{to:'main'},
        login:{to:'sub'}
    },
    action: function () {
        this.render();
    }
});

Router.route('join', {
    path:'/join',
    layoutTemplate:'layout',
    action: function () {

        this.render('header', {to:'header'});

        this.render('users', {to:'main'});

        this.render('join', {to:'sub'});
    }
});

Router.route('/remove', function () {
    Router.go('/');
});

Router.route('manageusers',{
    path:'/manageusers/:keyword',
    layoutTemplate: 'layout',
    yieldTemplates :{
        header:{to:'header'},
        users:{to:'main'},
        '':{to:'sub'}
    },
    action :function(){
        this.render()
    },
    data: function () {
        return this.params.keyword;
    }
});
Router.route('manageuser',{
    path:'/manageusers',
    layoutTemplate: 'layout',
    yieldTemplates :{
        header:{to:'header'},
        users:{to:'main'},
        '':{to:'sub'}
    },
    action :function(){
        this.render()
    },
    data: function () {
        return '';
    }
});

Router.route('postpage', {
    path:'/postpage/:id',
    layoutTemplate:'layout',
    action:function() {
        this.render();
    },
    yieldTemplates:{
        header:{to:'header'},
        contents:{to:'main'},
        '':{to:'sub'}
    },
    data:function(){

        return this.params.id;
    }
});

Router.route('newpost', {
    path:'/newpost',
    layoutTemplate:'layout',
    action:function() {
        this.render();
    },
    yieldTemplates:{
        header:{to:'header'},
        'editcontents':{to:'main'},
        '':{to:'sub'}
    }
});