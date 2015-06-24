/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

Meteor.publish('chat_publish', function () {
    return chatCollection.find({});
});