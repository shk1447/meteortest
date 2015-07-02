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

            if(title){
                var id = Meteor.call('insertPosts', userid, title, contents);
                Router.go('/');
            } else {
                alert('제목을 입력하시오.')
            }
        },
        'click #cancelbtn' : function(event, template){
            Router.go('/');
        }
    });
}