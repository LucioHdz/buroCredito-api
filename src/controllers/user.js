const { validateToken } = require('../../utils/tokenValidation');
const User = require('../database/User/User.model')


exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Content can not be empty!' })
    }
    const newUser = new User(req.body);
    User.create(newUser, (error, response) => {
        if (error) {
            res.status(500).send({
                message:
                    error.message || "Some error occurred while creating the User"
            });
        } else {
            res.status(200).json(response);
        }
    });
}


exports.findByRFC = (req, res) => {
    const rfc = req.params.rfc;

    const token = req.headers['authorization'];
    const validacion = validateToken(token, 'codewaykeytoken');
    if (validacion) {
        User.findByRFC(rfc, (err, response) => {
            if (err) {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while searching for the user"
                });
            } else {
                res.status(200).json(response);
            }
        })
    } else {
        res.status(403).json({ message: 'Access denied, invalid token' })
    }
}


exports.update = (req, res) => {
    const id = req.params.id
    const token = req.headers['authorization'];
    if (!req.body) {
        res.status(400).send({ message: 'Content can not be empty!' })
    }
    if (validateToken(token, 'codewaykeytoken')) {


        const newUser = new User(req.body);
        User.update(id, newUser, (error, response) => {
            if (error) {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while creating the User"
                });
            } else {
                res.status(200).json(response);
            }
        });
    } else {
        res.status(403).json({ message: 'Access denied, invalid token' })
    }
}
exports.delete = (req, res) => {
    const id = req.params.id
    const token = req.headers['authorization'];
    if (validateToken(token, 'codewaykeytoken')) {

        User.delete(id, (err, response) => {
            if (err) {
                res.status(500).json({
                    message:
                        err.message || 'Some error occurred while deleting the user'
                })
            } else {
                res.status(200).json(response)
            }
        })
    } else {
        res.status(403).json({ message: 'Access denied, invalid token' })
    }
}



exports.login = (req, res) => {
    const user = req.body.user
    const password = req.body.password
    User.login(user, password, (err, response) => {
        if (err) {
            res.status(500).json({
                message:
                    err.message || 'Some error occurred while logging in'
            })
        } else {
                res.status(200).json(response);
        }
    })
}