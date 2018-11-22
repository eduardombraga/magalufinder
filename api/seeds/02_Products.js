exports.seed = function(knex, Promise) {

    var productsTable = 'products';

    var rows = [

        {
            productname: 'SmartTv Samsung',
            productvalue: 1000,
            description: 'SmartTv Samsung 4k 50 polegadas',
        },
        {
            productname: 'Iphone 8',
            productvalue: 3000,
            description: 'Iphone 8 ultima geracao',
        },
        {
            productname: 'Caixa jbl extreme',
            productvalue: 800,
            description: 'jbl extreme bombox 8 horas bateria',
        },
        {
            productname: 'Dvd pionner',
            productvalue: 1500,
            description: 'Dvd automotivo pionner 7 polegadas 500 w',
        },
        {
            productname: 'Notebook dell',
            productvalue: 2500,
            description: 'Notebook dell ultima geracao core i7',
        },
        {
            productname: 'Bicicleta caloi',
            productvalue: 1100,
            description: 'Bicicleta caloi 18 marchas',
        },
        {
            productname: 'Pneu pirelli',
            productvalue: 300,
            description: 'Pneu pirelli aro 16',
        },
        {
            productname: 'Ar condicionado',
            productvalue: 1400,
            description: 'Ar condicionado samsung 5000 btu',
        },
        {
            productname: 'Colchao duratex',
            productvalue: 600,
            description: 'Colchao duratex sono bom',
        },
        {
            productname: 'Perfume ferrari',
            productvalue: 120,
            description: 'Perfume ferrari 130 ml',
        },

    ];

    return knex(productsTable)
            .del()
            .then(function(){
                return knex.insert(rows).into(productsTable);
            });

};
