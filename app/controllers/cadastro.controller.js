const sexoModel = require("../models/sexo.model");
const NutricionistaModel = require("../models/Nutricionista.model");
const AcompanhamentoModel = require("../models/Acompanhamento.model");
const ExercicioModel = require("../models/Exercicio.model");
const PersonalModel = require("../models/Personal.model");
const profissaoModel = require("../models/profissao.model");
const optionsMapper = require("../utils/mappers/select-options.mapper");

const fs = require("fs");
const Joi = require("joi");
const ejs = require("ejs");
const htmlToPdf = require("html-pdf-node");
const path = require("path");

const getCadastro = (req, res, next) => {
  
  const viewModel = {
    opcoesSexo: optionsMapper("descricao", "id", sexoModel.listaTodos()),
    opcoesNutricionista: optionsMapper("descricao","id", NutricionistaModel.listaTodos()),
    opcoesExercicio: optionsMapper("descricao", "id", ExercicioModel.listaTodos()),
    opcoesAcompanhamento: optionsMapper("descricao", "id", AcompanhamentoModel.listaTodos()),
    opcoesPersonal: optionsMapper("descricao", "id", PersonalModel.listaTodos()),
    opcoesProfissao: optionsMapper("nome", "id", profissaoModel.listaTodos()),
  };

 //construir o viewmodel
  res.render("Cadastro", viewModel);

};

const postCadastro= (req, res, next) => {
  
 
  
//montagem do viewmodel

  const { nome, email, datanascimento, sexo, Nutricionista, profissao, Exercicio, Acompanhamento, Personal } = req.body;


  const sexoSelecionado = sexoModel.BuscaPorId(sexo);
 const NutricionistaSelecionado = NutricionistaModel.BuscaPorId(Nutricionista);
 const profissaoSelecionado = profissaoModel.BuscaPorId(profissao);
  const ExercicioSelecionado = ExercicioModel.BuscaPorId(Exercicio);
  const AcompanhamentoSelecionado = AcompanhamentoModel.BuscaPorId(Acompanhamento);
  const PersonalSelecionado = PersonalModel.BuscaPorId(Personal);

  const pdfViewModel = {
    nome, 
    datanascimento,
    email,
    sexo: sexoSelecionado.descricao,
   Nutricionista: NutricionistaSelecionado.descricao,
    Personal: PersonalSelecionado.descricao,
    Exercicio: ExercicioSelecionado.descricao,
    Acompanhamento: AcompanhamentoSelecionado.descricao,
    profissao: profissaoSelecionado.nome,
  
  };
    
  // montar o html
  
  console.log(filePath);
  var filePath = path.join(__dirname, "../views/Cadastro-pdf.ejs");
  var templateHtml = fs.readFileSync(filePath, 'utf8');
  
  // montagem do pdf
  const htmlPronto = ejs.render(templateHtml, pdfViewModel);

  //retorno do pdf 

  const file = {
    content: htmlPronto  
  };

  const configuracoes = {
    format: 'A4',
    printBackground: true
  };

  htmlToPdf.generatePdf(file, configuracoes)
  .then((resultPromessa) => {
      res.contentType("application/pdf");
      res.send(resultPromessa);
    });

};


const CadastroItem = {
  nome: Joi.string().max(30).min(5).required().custom((value, helpers) => {
    const result = value.split(' ');
    if (result.length > 1) {
      return value;
    }
    return helpers.error("any.invalid");
  }),
  email:  Joi.string().email().required(),
  datanascimento: Joi.date().iso().required(),
  sexo: Joi.number().required(),
  Nutricionista: Joi.number().required(),
  Personal: Joi.number().required(),
  Acompanhamento: Joi.number().required(),
  Exercicio: Joi.number().required(),
  profissao: Joi.number().required(),
}

const postCadastroSchema = Joi.object(CadastroItem);

const putCadastroSchema = Joi.array().items(Joi.object(CadastroItem));

const getCadastroSchema = Joi.object({
  teste: Joi.number().required(),
});

module.exports = {
  getCadastro,
  postCadastro,
  postCadastroSchema,
  putCadastroSchema,
  getCadastroSchema
};
