exports.seed = function(knex, Promise) {

    var usersTable = 'users';

    var rows = [

        {
            username: 'admin',
            userpassword: 'admin',
            useradmin: true,
        },
        {
            username: 'cliente',
            userpassword: 'cliente',
            useradmin: false,
        },

    ];

    return knex(usersTable)
            .del()
            .then(function(){
                return knex.insert(rows).into(usersTable);
            });

};
