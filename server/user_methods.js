/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

Meteor.methods({
    insertuser: function (userid, password, profile) {
        var date = new Date();

        var users = userCollection.find({});
        if(users)
        {
            var flag = true;
            users.forEach(function(data){
                if(data)
                {
                    if(data.userid === userid)
                    {
                        flag = false;
                    }
                }
            });
        }

        if(flag){
            var id = userCollection.insert({
                userid : userid,
                password : password,
                profile : profile,
                createdAt : date
            });

            return id;
        }
        else
        {
            return 'exist';
        }
    }
});