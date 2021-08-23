
const profissaoDB = [
    {
        id: 1, 
        nome: "Muito",
    },
    { 
        id: 2, 
        nome: "Pouco",
    },
    { 
        id: 3, 
        nome: "Nenhum",
    },
];


const listaTodos = () => {

    return profissaoDB;

}

const BuscaPorId = (id) => {

    const result = profissaoDB.filter((item) => {
           return parseInt(item.id) === parseInt(id);
    });

    return result.length > 0 ? result[0] : undefined;

}


const BuscaPorDescricao = (id) => {

    const result = profissaoDB.filter((item) => {
           return parseInt(item.id) === parseInt(id);
    });

    return result.length > 0 ? result[0] : undefined;

}

const criaNovoprofissao = ({ id, descricao }) => {

    profissaoDB.push({ id, descricao });

}


module.exports = {
    listaTodos,
    BuscaPorId,
    criaNovoprofissao
}