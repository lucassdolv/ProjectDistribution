const express = require("express");
const router = require("./router/router");
const sequelize = require('./config/config.js');
const app = express();

app.use(express.json());
app.use('/api/user', router);

app.get('/healthcheck', (req, res) => {
    return res.status(200).json({
        msg: 'Estamos online',
        alive: true
    })
});
sequelize.authenticate()
.then(async () => {
    console.log("Conexão estabelecida com sucesso!");
    await sequelize.sync();

})
.then(()=> {
    app.listen(8080, () =>{
        console.log("########################");
        console.log("Rodando na porta 8080");
        console.log("########################");
    });
})
.catch((error) =>{
    console.error("erro ao se conectar com banco de dados:", error);
})

