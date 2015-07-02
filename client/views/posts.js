/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.posts.onCreated(function () {
        this.subscribe('posts_publish');
    });

    Template.posts.onRendered(function () {

    });

    Template.posts.onDestroyed(function () {
        console.log('destroyed');
    });

    Template.posts.helpers({
        currentUsername: function () {
            return Session.get('username')
        },

        postlist: function(){
            return postsdata(this.num, this.keyword).postlist;
        },
        pagelist: function () {
            console.log(this.keyword);
            return postsdata(this.num, this.keyword).pagelist;
        },
        writeValid: function(){
            var islogin = Session.get('username');
            if(islogin){
                return 'visible';
            }
            else{
                return 'collapse';
            }
        },
        keyword : function(){
            return Session.get('keyword');
        }
    });

    Template.posts.events({
        'keyup #messageInput': function(event, template){
            if(event.keyCode === 13){
                var username = Session.get('username');
                var message = template.$('#messageInput').val();
                console.log( template.$('input')[0]);
                template.$('#messageInput').val('');
            }
        },
        'click #messageDelbtn': function(event, template){
            console.log(template.$("#messageDelbtn"));
            console.log("test");
        },
        'click #postbtn' : function(event, template){
            var username = Session.get('username');
            var number = postsCollection.find().count() + 1;
            var title = template.$('#titleinput').val();
            var contents = template.$('#postinput').val();
            Meteor.call('insertPosts', number, username, title, contents);
            template.$('#titleinput').val('');
            template.$('#postinput').val('');
        },
        'click #writebtn' : function(event, template){
            Router.go('/newpost');
        },
        'keyup #searchbox' : function (event, template){
            if(event.keyCode === 13){
                var keyword = template.$('#searchbox').val();
                Session.set('keyword', keyword);
                Router.go('/posts/'+'1'+'/'+keyword);
            }
        }
    });

    var postsdata = function (num, search) {
        var skipcount = (num - 1) * 10;
        var count = postsCollection.find({title:{$regex:search}}).count();

        var aa = count / 10;
        var bb = Math.ceil(aa);

        console.log(count);
        var arr = [];
        for(var i = 1; i <  bb+1; i++){
            arr.push({number:i});
        }

        var data = {pagelist:arr, postlist: postsCollection.find({title:{$regex:search}}, {sort: {createdAt:-1}, skip:skipcount, limit:10})};

        return data;
    }
}