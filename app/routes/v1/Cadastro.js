const CadastroController = require("../../controllers/Cadastro.controller");
const middlewareValidaDTO = require("../../utils/dto-validate");

module.exports = (routeV1) => {
  routeV1
    .route("/Cadastro")
    .get(CadastroController.getCadastro) 
    .post(middlewareValidaDTO("body", CadastroController.postCadastroSchema), CadastroController.postCadastro)
    .put(middlewareValidaDTO("body", CadastroController.putCadastroSchema), CadastroController.postCadastro);
   
};
