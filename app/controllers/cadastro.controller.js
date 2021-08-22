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
    nome: "",
    title: "",
    opcoesSexo: optionsMapper("descricao", "id", sexoModel.listaTodos()),
    opcoesNutricionista: optionsMapper("descricao","id", NutricionistaModel.listaTodos()),
    opcoesExercicio: optionsMapper("nome", "id", ExercicioModel.listaTodos()),
    opcoesAcompanhamento: optionsMapper("nome", "id", AcompanhamentoModel.listaTodos()),
    opcoesPersonal: optionsMapper("nome", "id", PersonalModel.listaTodos()),
    opcoesProfissao: optionsMapper("nome", "id", profissaoModel.listaTodos()),
    comboEstado: (e) => console.log(e),
    valorsecreto: JSON.stringify({ nome: "teste", idade: 0 }),
  };

 //construir view
  res.render("Cadastro", viewModel);

};

const postCadastro= (req, res, next) => {
  
 
  
 // montar o viewmodel

  const { nome, email, datanascimento, sexo, Nutricionista, profissao, Exercicio, Acompanhamento, Personal } = req.body;


  const sexoSelecionado = sexoModel.BuscaPorId(sexo);
 const NutricionistaSelecionado = NutricionistaModel.BuscaPorDescricao(Nutricionista);
 const profissaoSelecionado = profissaoModel.BuscaPorDescricao(profissao);
  const ExercicioSelecionado = ExercicioModel.BuscaPorDescricao(Exercicio);
  const AcompanhamentoSelecionado = AcompanhamentoModel.BuscaPorDescricao(Acompanhamento);
  const PersonalSelecionado = PersonalModel.BuscaPorDescricao(Personal);

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
    valorsecreto: JSON.stringify({ nome: "teste", idade: 0 }),
  };
    
  // montar o html
  
  console.log(filePath);
  var filePath = path.join(__dirname, "../views/Cadastro-pdf.ejs");
  var templateHtml = fs.readFileSync(filePath, 'utf8');
  
  // montar o pdf
  const htmlPronto = ejs.render(templateHtml, pdfViewModel);

  //retornar o pdf

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