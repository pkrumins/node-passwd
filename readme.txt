This is a node.js module for controlling /etc/passwd. I needed to do that
in my http://browserling.com startup.

It was written by Peteris Krumins (peter@catonmat.net).
His blog is at http://www.catonmat.net  --  good coders code, great reuse.

------------------------------------------------------------------------------

Here is an example usage:

    var passwd = require('passwd');

    passwd.addUser('pkrumins', 'password');
    passwd.delUser('pkrumins');
    passwd.getUsers(function (users) {
        users.forEach(function (user) {
            console.log(user.username);
        });
    });

That's it.

------------------------------------------------------------------------------


Sincerely,
Peteris Krumins
http://www.catonmat.net

