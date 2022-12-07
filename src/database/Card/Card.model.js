const database = require('../connection');



const Card = function (cardData) {
    this.card = cardData.card;
    this.account = cardData.account;
    this.interbankKey = cardData.interbankKey;
    this.name = cardData.name.toUpperCase();
    this.surname = cardData.surname.toUpperCase();
}




Card.create = (newCard, callback) => {
    database.query(`INSERT INTO tarjetacodeway
    VALUES(
        DEFAULT,
        '${newCard.card}',
        '${newCard.account}',
        '${newCard.interbankKey}',
        '${newCard.name}',
        '${newCard.surname}'
    )`, (err, res) => {
        if (err) {
            callback(err, { create: false });
        } else {
            callback(err, {
                create: true
            });
        }
    })
}


Card.read = (callback) => {
    database.query(`SELECT * FROM tarjetacodeway`, (err, res) => {
        if (err) callback(err, { read: false });
        else callback(null, res);
    })
}


Card.update = (id, newCard, callback) => {
    database.query(`UPDATE  tarjetacodeway SET 
        
        noTarjeta = '${newCard.card}',
        noCuenta = '${newCard.account}',
        claveInterbancaria= '${newCard.interbankKey}',
        nombresPersona = '${newCard.name.toUpperCase()}',
        apellidosPersonas = '${newCard.surname.toUpperCase()}'
        WHERE idTarjeta = ${id}`, (err, res) => {
        if (err) callback(err, { update: false });
        else callback(null, { update: true });
    })
}


Card.delete = (id, callback) => {
    database.query(`
    DELETE FROM tarjetacodeway WHERE idTarjeta = ${id}`, (err, res) => {
        if (err) callback(err, { delete: false });
        else callback(null, { delete: true });
    })
}


module.exports = Card;