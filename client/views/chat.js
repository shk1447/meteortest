/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.chat.onCreated(function () {
        this.subscribe('chat_publish');
    });

    Template.chat.onRendered(function () {
    });

    Template.chat.onDestroyed(function () {
    });

    Template.chat.helpers({
        currentUsername: function () {
            return Session.get('username')
        },

        list: function(){
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
        }
    });
}