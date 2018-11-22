exports.up = function(knex, Promise) {

    return knex
            .schema
            .createTable('stores', function(storesTable){

                storesTable.integer('storeid', 20).primary().notNullable().unique();
                storesTable.string('cep', 10).notNullable();
                storesTable.string('description', 100).notNullable();

            })

            .createTable('products', function(productsTable){

                productsTable.increments();
                productsTable.string('productname', 50).notNullable();
                productsTable.decimal('productvalue').notNullable();
                productsTable.string('description', 100).notNullable();

            })

            .createTable('productsstores', function(productsstoresTable){

                productsstoresTable.integer('productid', 25).notNullable();
                productsstoresTable.integer('storeid', 20).notNullable();

            })

            .createTable('users', function(usersTable){

                usersTable.increments();
                usersTable.string('username', 20).notNullable().unique();
                usersTable.string('userpassword', 50).notNullable();
                usersTable.boolean('useradmin').notNullable().defaultTo(false);

            })

};

exports.down = function(knex, Promise) {
  
    return knex
            .schema
                .dropTableIfExists('stores')
                .dropTableIfExists('products')
                .dropTableIfExists('productsstores')
                .dropTableIfExists('users');

};
