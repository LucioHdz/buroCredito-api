const Card = require('../database/Card/Card.model');



exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).json({ message: 'Content can not be empty!' });
    }
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
}



exports.read = (req, res) => {
    Card.read((err, response) => {
        if (err) res.status(500).json({ message: err.message || 'Some error occurred while reading the cards' })
        else res.status(200).json(response)
    })
}



exports.update = (req, res) => {
    const id = req.params.id
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
}




exports.delete = (req, res) => {
    const id = req.params.id
    Card.delete(id, (err, response) => {
        if (err) res.status(400).json({ message: err.message || 'Some error occurred while deleting the card' });
        else res.status(200).json(response);
    })
}
