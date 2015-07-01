/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.users.onCreated(function () {
        // user database publish
        this.subscribe('user_publish');
    });

    Template.users.onRendered(function () {
    });

    Template.users.onDestroyed(function () {
    });

    Template.users.helpers({
        userlist : function(){
            return userCollection.find({});
        }
    });

    Template.users.events({});
}