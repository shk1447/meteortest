/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

Meteor.publish('chat_publish', function () {
    return chatCollection.find({});
});

Meteor.publish('user_publish', function () {
   return userCollection.find({});
});

Meteor.publish('posts_publish', function (){
    return postsCollection.find({});
});