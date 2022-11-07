const { createServer } = require("./src/configs/server");
const user = require("./src/routes/user");

app = createServer();


app.get('/', (req, res) => {
    res.send(` 
    <h5>Usuarios</h5> 
    <p>http://localhost:3001/v1/user/ <br/><br/>
    POST '/' body<br/>
    GET '/:rfc'  <br/>
    PATCH '/:id' body <br/>
    DELETE '/:id' <br/>
    </p> `)
})




app.use('/v1/user/', user)

