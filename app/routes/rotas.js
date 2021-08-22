
const express = require("express");
const v1Home = require('./v1/home');
const v1Sobre = require('./v1/sobre');
const v1Cadastro = require('./v1/Cadastro');


module.exports = (app, rota) => {

   
    v1Home(rota);
    v1Sobre(rota);
    v1Cadastro(rota);
    app.use('', rota);
}

