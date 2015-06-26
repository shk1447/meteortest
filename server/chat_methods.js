/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

Meteor.methods({
    insertMessage: function (username, message) {
        check(username, String);
        check(message, String);
        var date = new Date();
        var id = chatCollection.insert({
            username: username,
            message: message,
            createAt: date
        });

        return id;
    },
    removeMessage: function (username) {
        check(username, String);

        chatCollection.remove({
            username: username
        });
    },
    insertUserInfo: function (username, password) {
        check(username, String);
        check(password, String);

        var date = new Date();
        var id = userCollection.insert({
            userid : username,
            password : password,
            createdAt : date
        });

        return id;
    },
    insertPosts: function (username, title, contents) {
        check(username, String);
        check(title, String);
        check(contents, String);

        var date = new Date();

        var id = postsCollection.insert({
            username : username,
            title: title,
            contents: contents,
            createdAt: date
        });

        return id;
    }
});