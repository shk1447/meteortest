/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.posts.onCreated(function () {
        this.subscribe('chat_publish');
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
            return this.postlist;
        },
        pagelist: function () {
            return this.pagelist;
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
            Router.go('/newpost')
        }
    });
}