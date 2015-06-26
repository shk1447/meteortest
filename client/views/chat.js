/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.chat.onCreated(function () {
        this.subscribe('chat_publish');
        this.subscribe('posts_publish');
    });

    Template.chat.onRendered(function () {
    });

    Template.chat.onDestroyed(function () {
    });

    Template.chat.helpers({
        currentUsername: function () {
            return Session.get('username')
        },

        postlist: function(){
            var count = postsCollection.find().count();

            return postsCollection.find({}, {sort: {createAt:1}, skip:count-40});
        },
        commentlist: function () {
            var count = chatCollection.find().count();

            return chatCollection.find({}, {sort: {createAt:1}, skip:count-40});
        }
    });

    Template.chat.events({
        'keyup #messageInput': function(event, template){
            if(event.keyCode === 13){
                var username = Session.get('username');
                var message = template.$('#messageInput').val();
                var date = new Date();
                var id = Meteor.call('insertMessage', username, message);
                template.$('#messageInput').val('');
            }
        },
        'click #messageDelbtn': function(event, template){
            console.log(template.$("#messageDelbtn"));
            console.log("test");
        },
        'click #postbtn' : function(event, template){
            var username = Session.get('username');
            var title = template.$('#titleinput').val();
            var contents = template.$('#postinput').val();
            Meteor.call('insertPosts', username, title, contents);
            template.$('#titleinput').val('');
            template.$('#postinput').val('');
        }
    });
}