

var juguler = {
    colonne: [],
    cards:[],

    addColumn: function(indice, name) {
        this.colonne.push({
            indice: indice,
            nome: name
        });
    },

    add: function(num_colonna, titolo, body){
        this.cards.push({
            titolo: titolo,
            body: body,
            numero_colonna: num_colonna
        });
    }
};

module.exports = juguler;