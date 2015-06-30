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
    insertPosts: function (userid, title, contents) {
        check(userid, String);
        check(title, String);
        check(contents, String);

        var date = new Date();

        var id = postsCollection.insert({
            userid : userid,
            title: title,
            contents: contents,
            createdAt: date
        });

        console.log(id);

        return id;
    },
    updatePosts: function (postid, username, comment){
        console.log('receive');

        var date = new Date();
        var test = postsCollection.find({_id:postid});
        test.forEach(function(data){
            if(data.commentlist)
            {
                data.commentlist.push({ userid:username, comment:comment, commectedAt:date });
            }
            else
            {
                data.commentlist = [{ userid:username, comment:comment, commectedAt:date }];
            }
            postsCollection.update({_id:postid}, data);
        });
    }
});