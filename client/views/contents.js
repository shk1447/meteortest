/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.contents.onCreated(function () {
        this.subscribe('posts_publish');
    });

    Template.contents.onRendered(function () {
    });

    Template.contents.onDestroyed(function () {
    });

    Template.contents.helpers({
        postlist : function(){
            var postId = this.toString();
            Session.set('postid', postId);
            return postsCollection.find({_id:postId});
        },
        currentUsername : function () {
            return Session.get('username');
        }
    });

    Template.contents.events({
        'keyup #messageInput': function(event, template){
            if(event.keyCode === 13){
                var username = '';
                username = Session.get('username');
                var comment = template.$('#messageInput').val();
                var postid = '';
                postid = Session.get('postid');
                if(username)
                {
                    Meteor.call('updatePosts', postid, username, comment);
                    template.$('#messageInput').val('');
                }
            }
        }
    });
}