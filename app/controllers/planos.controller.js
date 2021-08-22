const getplanos = (req, res, next) => {
    const novotexto = Date();
  
    res.render("planos", { novotexto });
  };
  
  module.exports = {
    getplanos,
  };
  