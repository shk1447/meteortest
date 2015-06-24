/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

Meteor.methods({
    insertMessage: function (username, message) {
        console.log(username);
        console.log(message);
        check(username, String);
        check(message, String);
        var date = new Date();
        var id = chatCollection.insert({
            username: username,
            message: message,
            createAt: date
        });

        return id;
    }
});