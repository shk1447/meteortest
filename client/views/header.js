/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.header.onCreated(function () {
    });

    Template.header.onRendered(function () {
    });

    Template.header.onDestroyed(function () {
    });

    Template.header.helpers({
        loginedid:function(){
            return Session.get('username');
        }
    });

    Template.header.events({});
}