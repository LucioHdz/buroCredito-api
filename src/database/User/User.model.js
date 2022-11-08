const { v4: uuidv4 } = require('uuid');
const database = require('../connection');




const User = function (userData) {
    this.id = uuidv4();
    this.name = userData.name;
    this.surname = userData.surname;
    this.secondSurname = userData.secondSurname;
    this.rfc = userData.rfc;
    this.direction = userData.direction;
    this.city = userData.city;
    this.postalCode = userData.postalCode;
    this.state = userData.state;
    this.region = userData.region;
    this.suburb = userData.suburb;
    this.user = userData.user;
    this.password = userData.password;
    this.email = userData.email;
};


User.create = (newUser, callback) => {
    database.query(`call addUser('${newUser.id}',
    '${newUser.name}',
    '${newUser.surname}',
    '${newUser.secondSurname}',
    '${newUser.rfc}',
    '${newUser.direction}',
    '${newUser.city}',
    '${newUser.postalCode}',
    '${newUser.state}',
    '${newUser.region}',
    '${newUser.suburb}',
    '${newUser.email}',
    '${newUser.user}',
    '${newUser.password}'
    )`, (err) => {
        if (err) {
            callback(err, { delete: false })
        } else {
            callback(null, { delete: true })
        }
    })

}



User.findByRFC = (rfc, callback) => {
    database.query(`SELECT * FROM persona WHERE rfc='${rfc}'`,
        (err, res) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, res);
            }
        })
}


User.update = (id, userData, callback) => {
    database.query(`UPDATE persona SET
        
    nombres = '${userData.name}',
    primerApellido = '${userData.surname}',
    segundoApellido = '${userData.secondSurname}',
    rfc = '${userData.rfc}',
    direccion = '${userData.direction}',
    ciudad = '${userData.city}',
    codigoPostal = '${userData.postalCode}',
    estado = '${userData.state}',
    region = '${userData.region}',
    colonia = '${userData.suburb}',
    user = '${userData.user}',
    password = '${userData.password}',
    status = 1,
    email = '${userData.email}'
    WHERE idPersona = '${id}'`, (err) => {
        if (err) {
            callback(err, { patch: false })
        } else {
            callback(null, { patch: true })
        }
    })
}



User.delete = (id, callback) => {
    console.log(id)
    database.query(`DELETE FROM persona WHERE idPersona = '${id}'`,
        (err) => {
            if (err) {
                callback(err, { delete: false })
            } else {
                callback(null, { delete: true })
            }
        })
}



User.login = (user, password, callback) => {
    database.query(`SELECT
        persona.idPersona, 
        usuariorol.idRol
    FROM
        persona
    INNER JOIN
        usuariorol
    ON 
        persona.idPersona = usuariorol.idPersona
    WHERE 
        persona.user = '${user}' and persona.password = '${password}'`,
        (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, res)
            }
        }
    )
}



module.exports = User







