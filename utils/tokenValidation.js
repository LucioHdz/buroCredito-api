const jwt = require('jsonwebtoken');

module.exports.validateToken = (token,keyAccess)=>{
    var response = false;
    jwt.verify(token, keyAccess,(err, user) => {
        if (user) {
            response = true;
        }
    })
    return response;
}

module.exports.validateTokenAdmin = (token,keyAccess)=>{
    var response = false;
    jwt.verify(token, keyAccess,(err, user) => {
        if (user) {
            if (user.idRol==='1') {
                response = true;
            }
        }
    })
    return response;
}
module.exports.getIdByToken = (token,keyAccess)=>{
    var response = null;
    jwt.verify(token, keyAccess,(err, user) => {
        if (user){
            response = user.idPersona;
        }
    })
    return response;
}