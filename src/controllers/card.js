const { validateTokenAdmin, validateToken } = require('../../utils/tokenValidation');
const { keyAccess } = require('../configs/ConstantTokens');
const Card = require('../database/Card/Card.model');



exports.create = (req, res) => {
    const token = req.headers['authorization'];
    const validacion = validateTokenAdmin(token, keyAccess);
    if (!req.body) {
        res.status(400).json({ message: 'Content can not be empty!' });
    }
    if (validacion) {

        const newCard = new Card(req.body);

        Card.create(newCard, (err, response) => {
            if (err) {
                res.status(500).json({
                    message: err.message || 'Some error occurred while creating the card'
                })
            } else {
                res.status(200).json(response)
            }
        })
    } else {
        res.status(403).json({ message: 'Access denied, invalid token' })
    }
}



exports.read = (req, res) => {
    const token = req.headers['authorization'];
    const validacion = validateToken(token, keyAccess);
    if (validacion) {

        Card.read((err, response) => {
            if (err) res.status(500).json({ message: err.message || 'Some error occurred while reading the cards' })
            else res.status(200).json(response)
        })
    } else {
        res.status(403).json({ message: 'Access denied, invalid token' })
    }
}



exports.update = (req, res) => {
    const id = req.params.id
    const token = req.headers['authorization'];
    const validacion = validateTokenAdmin(token, keyAccess);
    if (validacion) {

        if (!req.body) {
            res.status(400).json({ message: 'Content can not be empty!' });
        }
        Card.update(id, req.body, (err, response) => {
            if (err) {
                res.status(500).json({
                    message: err.message || 'Some error occurred while creating the card'
                })
            } else {
                res.status(200).json(response)
            }
        })
    } else {
        res.status(403).json({ message: 'Access denied, invalid token' })
    }
}




exports.delete = (req, res) => {
    const id = req.params.id
    const token = req.headers['authorization'];
    const validacion = validateTokenAdmin(token, keyAccess);
    if (validacion) {

        Card.delete(id, (err, response) => {
            if (err) res.status(400).json({ message: err.message || 'Some error occurred while deleting the card' });
            else res.status(200).json(response);
        })
    }else{
        res.status(403).json({ message: 'Access denied, invalid token' })
        
    }
}
