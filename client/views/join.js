/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

if (Meteor.isClient) {
    Template.join.onCreated(function () {
        this.subscribe('user_publish');
    });

    Template.join.onRendered(function () {
    });

    Template.join.onDestroyed(function () {
    });

    Template.join.helpers({});

    Template.join.events({
        'click #joinbtn':function(event, template){
            var id = template.$('#id').val();
            var pass = template.$('#pass').val();
            var repass = template.$('#repass').val();
            var name = template.$('#name').val();
            var age = template.$('#age').val();
            var gender = template.$('#gender').val();

            if(pass === repass)
            {
                var profile = {name : name, age : age, gender : gender};
                Meteor.call('insertuser', id, pass, profile, function(error, result){
                    if(result === 'exist')
                    {
                        template.$('#id').val('');
                    }
                    else
                    {
                        Router.go('/');
                    }
                });
            }
            else
            {
                retflag = false;
                template.$('#repass').val('');
            }
        },
        'click #cancelbtn':function(event, template){
            Router.go('/');
        }
    });
}