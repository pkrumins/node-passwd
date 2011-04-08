This is a node.js module for controlling /etc/passwd. I needed to do that
in my http://browserling.com startup.

It was written by Peteris Krumins (peter@catonmat.net, @pkrumins on twitter).
His blog is at http://www.catonmat.net  --  good coders code, great reuse.

------------------------------------------------------------------------------

Here is an example usage:

    var passwd = require('passwd');

    // add a new user (calls `useradd -m -p shadowPass pkrumins`)
    passwd.add('pkrumins', 'password', { createHome : true }, function (status) {
        if (status == 0) {
            console.log('great success! pkrumins added!');
        }
        else {
            console.log('not so great success! pkrumins not added! useradd command returned: ' + status);
        }
    });


    // calls `userdel pkrumins`
    passwd.del('pkrumins', function (status) { ... });

    // locks user pkrumins via `usermod -L pkrumins`
    passwd.lock('pkrumins', function (status) { ... })

    // unlocks user pkrumins via `usermod -U pkrumins`
    passwd.unlock('pkrumins', function (status) { ... })

    // gets 'pkrumins' user entry from /etc/passwd
    passwd.get('pkrumins', function (user) { ... })

    // gets all users from /etc/passwd
    passwd.getAll(function (users) {
        users.forEach(function (user) {
            console.log(user.username);
        });
    });

That's it.

------------------------------------------------------------------------------

Sincerely,
Peteris Krumins (twitter: @pkrumins)
http://www.catonmat.net

