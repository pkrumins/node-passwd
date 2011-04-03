This is a node.js module for controlling /etc/passwd. I needed to do that
in my http://browserling.com startup.

It was written by Peteris Krumins (peter@catonmat.net).
His blog is at http://www.catonmat.net  --  good coders code, great reuse.

------------------------------------------------------------------------------

Here is an example usage:

    var passwd = require('passwd');

    passwd.add('pkrumins', 'password', { createHome : true }); // calls `useradd -p shadowpassword -m pkrumins`

    passwd.del('pkrumins'); // calls `userdel pkrumins`

    passwd.get('pkrumins', function (user) { ... }) // gets 'pkrumins' user entry from /etc/passwd

    passwd.getAll(function (users) { // gets all users from /etc/passwd
        users.forEach(function (user) {
            console.log(user.username);
        });
    });

That's it.

------------------------------------------------------------------------------


Sincerely,
Peteris Krumins
http://www.catonmat.net

