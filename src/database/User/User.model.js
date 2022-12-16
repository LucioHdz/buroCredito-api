const { v4: uuidv4 } = require("uuid");
const database = require("../connection");
const jwt = require("jsonwebtoken");

const User = function (userData) {
    this.id = uuidv4();
    this.name = userData.name;
    this.surname = userData.surname;
    this.secondSurname = userData.secondSurname;
    this.rfc = userData.rfc;
    this.direction = userData.direccion;
    this.city = userData.city;
    this.postalCode = userData.postalCode;
    this.state = userData.state;
    this.region = userData.region;
    this.suburb = userData.suburb;
    this.email = userData.email;
    this.birthdate = userData.birthdate;
    this.accountType = userData.accountType;
    this.exteriorNumber = userData.exteriorNumber;
    this.user = userData.user;
    this.password = userData.password;
    this.country = userData.country;
    this.nationality = userData.nationality;
};

User.create = (newUser, callback) => {
    database.query(
        `call addUser('${newUser.id}',
    '${newUser.name}',
    '${newUser.surname}',
    '${newUser.secondSurname}',
    '${newUser.rfc}',
    '${newUser.direccion}',
    '${newUser.city}',
    '${newUser.postalCode}',
    '${newUser.state}',
    '${newUser.region}',
    '${newUser.suburb}',
    '${newUser.email}',
    '${newUser.birthdate}',
    '${newUser.accountType}',
    '${newUser.exteriorNumber}',
    '${newUser.user}',
    '${newUser.password}'
    )`,
        (err) => {
            if (err) {
                callback(err, { delete: false });
            } else {
                callback(null, { delete: true });
            }
        }
    );
};

User.findByRFC = (rfc, callback) => {
    database.query(`SELECT * FROM persona WHERE rfc='${rfc}'`, (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
};
User.findByID = (id, callback) => {
    // console.log(`SELECT * FROM persona WHERE idPersona='${id}'` )
    database.query(
        `SELECT * FROM persona WHERE idPersona='${id}'`,
        (err, res) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, res);
            }
        }
    );
};

User.update = (id, userData, callback) => {
    console.log(userData);
    database.query(
        `UPDATE persona SET
        
    nombre = '${userData.name}',
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
    email = '${userData.email}',
    fechaNacimiento = '${userData.birthdate}',
    TipoCuenta = '${userData.accountType}',
    noExterior = '${userData.exteriorNumber}',
    pais = '${userData.country}',
    nacionalidad = '${userData.nationality}'
    WHERE idPersona = '${id}'`,
        (err) => {
            if (err) {
                callback(err, { patch: false });
            } else {
                callback(null, { patch: true });
            }
        }
    );
};

User.delete = (id, callback) => {
    console.log(id);
    database.query(`DELETE FROM persona WHERE idPersona = '${id}'`, (err) => {
        if (err) {
            callback(err, { delete: false });
        } else {
            callback(null, { delete: true });
        }
    });
};

User.login = (user, password, callback) => {
    database.query(`call login('${user}','${password}')`, (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            if (res[0].length !== 1) {
                callback(
                    { message: "incorrect value for User or password " },
                    null
                );
            } else {
                const datos = {
                    idPersona: res[0][0].idPersona,
                    idRol: res[0][0].idRol,
                };

                let token = jwt.sign(datos, `codewaykeytoken`, {
                    expiresIn: "1h",
                });
                const respuesta = { token: token, type: res[0][0].idRol };
                callback(null, respuesta);
            }
        }
    });
};

module.exports = User;
