/**
 * author : Seokhwan Kim <shk1447@n3n.co.kr>
 */

Meteor.methods({
    insertMessage: function (username, message) {
        check(username, String);
        check(message, String);
        var date = new Date();
        var id = postsCollection.save({
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
    insertPosts: function (number, username, title, contents) {
        check(username, String);
        check(title, String);
        check(contents, String);

        var date = new Date();


        var id = postsCollection.insert({
            number : number,
            username : username,
            title: title,
            contents: contents,
            createdAt: date,
            commentlist:[{
                username:"test",
                comments:"hahahahaha",
                createdAt:"12315"
            }]
        });

        console.log(id);

        return id;
    }
});