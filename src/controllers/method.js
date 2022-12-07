const { validateTokenAdmin, validateToken } = require('../../utils/tokenValidation');
const Method = require('../database/Methods/Method.model');
const method = require('../routes/method');


exports.create = (req, res) => {
    const token = req.headers['authorization'];
    const validacion = validateTokenAdmin(token, 'codewaykeytoken');
    if (validacion) {
        const token = req
        if (!req.body) {
            res.status(400).json({ message: 'Content can not be empty!' })
        } else {
            const newMethod = new Method(req.body);
            Method.create(newMethod, (err, response) => {
                if (err) {
                    res.status(500).json({ message: err.message || 'Some error occurred while creating the method' });
                } else {
                    res.status(200).json(response);
                }
            })
        }
    } else {
        res.status(403).json({ message: 'Access denied, invalid token' })

    }
}


exports.read = (req, res) => {
    const token = req.headers['authorization'];
    const validacion = validateToken(token, 'codewaykeytoken');
    if (validacion) {

        Method.read((err, response) => {
            if (err) {
                res.status(500).json({ message: err.message || 'Some error occurred while reading the method' });
            } else {
                res.status(200).json(response);
            }
        })
    } else {
        res.status(403).json({ message: 'Access denied, invalid token' })
    }

}


exports.update = (req, res) => {
    const token = req.headers['authorization'];
    const validacion = validateTokenAdmin(token, 'codewaykeytoken');
    if (validacion) {
        const id = req.params.id
        if (!req.body) {
            res.status(400).json({ message: 'Content can not be empty!' });
        }
        Method.update(id, req.body, (err, response) => {
            if (err) res.status(500).json({ message: err.message || 'Some error occurred while updating the method' });
            else res.status(200).json(response);
        })
    } else {
        res.status(403).json({ message: 'Access denied, invalid token' })
    }
}

exports.delete = (req, res) => {
    const token = req.headers['authorization'];
    const validacion = validateTokenAdmin(token, 'codewaykeytoken');
    if (validacion) {
        const id = req.params.id;
        Method.delete(id, (err, response) => {
            if (err) res.status(500).json({ message: err.message || 'Some error occurred while deleting the method' });
            else res.status(200).json(response);
        })
    } else {
        res.status(403).json({ message: 'Access denied, invalid token' })
    }
}