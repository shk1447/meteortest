/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.main.onCreated(function () {
        // user database publish
        this.subscribe('user_publish');
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
            },
            'click #join' : function (event, template) {
                var userid = template.$('#username').val();
                var password = template.$('#password').val();

                var ret = Meteor.call('insertUserInfo', userid, password);
            }
        }
    );
}