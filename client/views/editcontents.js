/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.editcontents.onCreated(function () {
    });

    Template.editcontents.onRendered(function () {
    });

    Template.editcontents.onDestroyed(function () {
    });

    Template.editcontents.helpers({

    });

    Template.editcontents.events({
        'click #savebtn': function(event, template){
            var userid = '';
            userid = Session.get('username');
            var title = template.$('#title').val();
            var contents = template.$('#contents').val();
            var id = Meteor.call('insertPosts', userid, title, contents);
            console.log('responseid : '+ id);
            Router.go('/');
        },
        'click #cancelbtn' : function(event, template){
            Router.go('/');
        }
    });
}