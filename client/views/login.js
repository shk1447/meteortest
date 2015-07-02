/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.login.onCreated(function () {
    });

    Template.login.onRendered(function () {
    });

    Template.login.onDestroyed(function () {
    });

    Template.login.helpers({
        curuser:function(){
            return Session.get('username');
        }
    });

    Template.login.events({
            'click #enter': function (event, template) {
                var username = template.$('#username').val();
                var password = template.$('#password').val();

                Meteor.call('confirmuser', username, password, function(error, result){
                    if(result === 'OK'){
                        Session.set('username', username);
                    }
                    else if(result === 'HATE'){
                        template.$('#password').val('');
                    }
                    else{
                        template.$('#username').val('');
                        template.$('#password').val('');
                    }
                });
            },
            'click #leave': function (event, template){
                Session.set('username', '');
            }
        }
    );
}