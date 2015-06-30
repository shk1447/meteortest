/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

Meteor.publish('user_publish', function () {
    return userCollection.find({});
});