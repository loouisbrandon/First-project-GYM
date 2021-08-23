module.exports = (contexto, schema) => {
  return async (req, res, next) => {
    
    const resultado = schema.validate(req[contexto], { abortEarly: false });
console.log(req[contexto] )
    if (resultado.error) {

      
      
      return res.render("errors", { 
        errors: resultado.error.details.map(item => {
          return item.message
        }) 
      });
    }

    next();
  };
};
