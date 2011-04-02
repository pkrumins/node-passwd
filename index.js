var fs = require('fs');

exports.addUser = function (user, pass) {
    fs.open('/etc/passwd', 'a', function (err, fd) {
        if (err) throw err;

        

        var entry = [userName, unixPass(pass), newUserId(), 101, '/home/' + userName, '/bin/false']
        fs.write(fd, entry.join(':') + '\n', function (err, fd) {
            fs.close(fd);
        });
    });
}

exports.delUser = function (user) {

}

exports.getUsers = function () {

}

exports.maxUserId = function () {

}

function getUsers (cb) {
    fs.readFile('/etc/passwd', function (err, users) {
        if (err) throw err;
        return data.split('\n').map(function (user) {
            var fields = user.split(':');
            return {
                username : fields[0],
                password : fields[1],
                userId : fields[2],
                groupId : fields[3],
                name : fields[4],
                homedir : fields[5],
                shell : fields[6]
            }
        });
    });
}

