const user = require('express').Router();
const UserRoute = require('../controllers/user'); 


// create user
user.post('/',UserRoute.create)
// read one user
user.get('/:rfc',UserRoute.findByRFC)
// update user
user.patch('/:id',UserRoute.update)
// delete user
user.delete('/:id',UserRoute.delete)



module.exports = user;