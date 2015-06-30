/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

Meteor.methods({
    insertUserInfo: function (userid, password, profile) {
        check(userid, String);
        check(password, String);

        var date = new Date();
        var id = userCollection.insert({
            userid : userid,
            password : password,
            profile : profile,
            createdAt : date
        });

        return id;
    }
});