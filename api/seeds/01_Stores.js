exports.seed = function(knex, Promise) {
    
    var storesTable = 'stores';

    var rows = [
        
        {
            storeid: 1,
            cep: '14400660',
            description: 'Filial 1 Magazine Luiza. Loja Centro. Franca-SP',
        },
        {
            storeid: 48,
            cep: '14406005',
            description: 'Filial 48 Magazine Luiza. Loja Franca Shopping. Franca-SP',
        },
        {
            storeid: 13,
            cep: '14400902',
            description: 'Filial 13 Magazine Luiza. Loja Estação. Franca-SP',
        },
        {
            storeid: 4,
            cep: '14401234',
            description: 'Filial 4 Magazine Luiza. Loja Avenida Brasil. Franca-SP',
        },
        {
            storeid: 3,
            cep: '14010060',
            description: 'Filial 3 Magazine Luiza. Loja Saldanha Marinho. Ribeirao Preto-SP',
        },

    ];

    return knex(storesTable)
            .del()
            .then(function(){
                return knex.insert(rows).into(storesTable);
            });
};