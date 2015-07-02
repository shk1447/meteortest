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
            var ddd = this.toString();
            return userCollection.find({"profile.name":{$regex:ddd}});
        },
        valid:function(){
            if(Session.get('username')){
                return 'visible';
            }
            else{
                return 'collapse'
            }
        }
    });

    Template.users.events({
        'click .btn':function(event, template){
            var userid = template.$(event.toElement).attr('test');
            var currentuser = Session.get('username');
            if(currentuser === userid)
            {
                return;
            }
            else
            {
                Meteor.call('removeuser', userid, function(err, result){

                });
            }
        },
        'keyup #searchuser': function (event, template) {
            var key = template.$('#searchuser').val();
            Router.go('/manageusers/' + key)
        }
    });
}