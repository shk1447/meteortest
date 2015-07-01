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
    },
    confirmuser: function(userid, password){
        var users = userCollection.find({});
        var result = 'NO';
        if(users) {
            users.forEach(function (data) {
                if (data) {
                    if (data.userid === userid) {
                        if(data.password === password){
                            result = 'OK';
                        }
                        else
                        {
                            result = 'HATE'
                        }
                    }
                }
            });
        }
        console.log(result);
        return result;
    },
    removeuser:function(userid){
        userCollection.remove({userid:userid});
    }
});