
const sexoDB = [
    {
        id: 1, 
        descricao: "Feminino",
    },
    { 
        id: 2, 
        descricao: "Masculino",
    },
    { 
        id: 3, 
        descricao: "Nao informado",
    },
];


const listaTodos = () => {

    return sexoDB;

}

const BuscaPorId = (id) => {

    const result = sexoDB.filter((item) => {
        return parseInt(item.id) === parseInt(id);
    });

    return result.length > 0 ? result[0] : undefined;

}


const BuscaPorDescricao = (id) => {

    const result = sexoDB.filter((item) => {
        return item.id === id;
    });

    return result.length > 0 ? result[0] : undefined;

}

const criaNovoSexo = ({ id, descricao }) => {

 
    sexoDB.push({ id, descricao });

}


module.exports = {
    listaTodos,
    BuscaPorId,
    criaNovoSexo
}