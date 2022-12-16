# API Buro de Credito

La API se encarga de realizar las consultas a la base de datos y de seguridad del programa.

## Indice

1. [Estructura de la API](#id1)

2. [Directorio _Utils_](#id2)

3. 

## Estructura de la API<a name='id1'><a>

.

├─ **src**

│   ├── _configs_

│   ├── *controllers*

│   ├── *database*

│   │     ├── _Card_

│   │     ├── *Methods*

│   │     ├── *Moffin*

│   │     └── *User*

│   └── *routes*

└── **utils**

## Directorio  _Utils_<a name='id2'><a>

Este directorio contiene los archivos de uso constante para la validación de los usuarios.

### Validacion de Tokens

Los tokens son creados con [jwt](https://www.npmjs.com/package/jsonwebtoken) y los métodos de validación reciben dos parametros para decodificar el token.

- **token** (token del usuario)

- **keyAccess** (llave privada para la codificacion de tokens

#### validateToken

valida si el token es valido retornando True o False segun sea el caso

```javascript
// tokenValidation.js
module.exports.validateToken = (token,keyAccess)=>{
return true || false
}
```

#### validateTokenAdmin

valida si el token es valido y es de un Administrador retornando True o False segun sea el caso

```javascript
// tokenValidation.js
module.exports.validateTokenAdmin = (token,keyAccess)=>{
return true || false
}
```

#### getIdByToken

valida si el token es valido y regresa el id del usuario codificado, retorna el id si es valido el token, de lo contrario retorna null.

```javascript
// tokenValidation.js
module.exports.getIdByToken = (token,keyAccess)=>{
return user.idPersona || null
}
```
