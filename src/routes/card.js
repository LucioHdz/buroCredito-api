const card = require('express').Router();
const Card = require('../controllers/card');


card.post('/',Card.create);
card.get('/',Card.read);
card.patch('/:id',Card.update);
card.delete('/:id',Card.delete);

module.exports = card;