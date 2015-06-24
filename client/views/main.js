/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.main.onCreated(function () {
    });

    Template.main.onRendered(function () {
    });

    Template.main.onDestroyed(function () {
    });

    Template.main.helpers({});

    Template.main.events({
            'click #enter': function (event, template) {
                var username = template.$('#username').val();
                Session.set('username', username);
                Router.go('chat');
            }
        }
    );
}