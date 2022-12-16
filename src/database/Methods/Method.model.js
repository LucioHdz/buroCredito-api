const { v4: uuid } = require("uuid");
const database = require("../connection");

const Method = function (data) {
    this.id = uuid();
    this.nombrePago = data.name;
    this.status = 1;
};

Method.create = (newMethod, callback) => {
    database.query(
        `INSERT INTO tipopago VALUES(
        '${newMethod.id}',
        '${newMethod.nombrePago}',
        ${newMethod.status}
    )`,
        (err, res) => {
            if (err) callback(err, null);
            else callback(null, { create: true });
        }
    );
};

Method.read = (callback) => {
    database.query(`SELECT * FROM tipopago`, (err, res) => {
        if (err) callback(err, null);
        else callback(null, res);
    });
};

Method.update = (id, data, callback) => {
    database.query(
        `UPDATE tipopago SET
    nombrePago = '${data.name}',
    status = ${data.status}
    WHERE idTipoPago = '${id}'`,
        (err, res) => {
            if (err) callback(err, null);
            else callback(null, { update: true });
        }
    );
};

Method.delete = (id, callback) => {
    database.query(
        `DELETE FROM tipopago WHERE idTipoPago = '${id}'`,
        (err, res) => {
            if (err) callback(err, null);
            else callback(null, { delete: true });
        }
    );
};

Method.savePay = (idUser, data, callback) => {
    const idPago = uuid();
    const idPagoPersona = uuid();
    database.query(
        `INSERT INTO pago VALUES ('${idPago}','${data.fechaPago}','${data.costo}','${data.idTipoPago}',1)`,
        (err, res) => {
            if (err) callback(err, null);
            else
                database.query(
                    `INSERT INTO pagopersona VALUES ('${idPagoPersona}','${idPago}','${idUser}')`,
                    (err, result) => {
                        if (err) callback(err, null);
                        else
                            callback(null, {
                                pago: res,
                                pagoPersona: result,
                                status:'COMPLETED'
                            });
                    }
                );
        }
    );
};

module.exports = Method;
