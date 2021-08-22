
const profissaoDB = [
    {
        id: 1, 
        nome: "Programador",
    },
    { 
        id: 2, 
        nome: "Arquiteto",
    },
    { 
        id: 3, 
        nome: "Padeiro",
    },
    { 
        id: 4, 
        nome: "Pintor",
    },
    { 
        id: 5, 
        nome: "Pedreiro",
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