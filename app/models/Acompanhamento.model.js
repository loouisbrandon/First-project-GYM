
const AcompanhamentoDB = [
    {
        id: 1, 
        descricao: "Sim",
    },
    { 
        id: 2, 
        descricao: "Não",
    },
];


const listaTodos = () => {

    return AcompanhamentoDB;

}


const BuscaPorId = (id) => {

    const result = ACompanhamentoDB.filter((item) => {
           return parseInt(item.id) === parseInt(id);
    });

    return result.length > 0 ? result[0] : undefined;

}


const BuscaPorDescricao = (id) => {

    const result = AcompanhamentoDB.filter((item) => {
           return parseInt(item.id) === parseInt(id);
    });

    return result.length > 0 ? result[0] : undefined;

}

const criaNovoAcompanhamento = ({ id, descricao }) => {




    AcompanhamentoDB.push({ id, descricao });

}


module.exports = {
    listaTodos,
    BuscaPorId,
    criaNovoAcompanhamento
}