/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.login.onCreated(function () {
        // user database publish
        this.subscribe('user_publish');
    });

    Template.login.onRendered(function () {
    });

    Template.login.onDestroyed(function () {
    });

    Template.login.helpers({});

    Template.login.events({
            'click #enter': function (event, template) {
                var username = template.$('#username').val();
                var password = template.$('#password').val();
                Session.set('username', username);

                Router.go('/');
            }
        }
    );
}