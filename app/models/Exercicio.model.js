
const ExercicioDB = [
    {
        id: 1, 
        descricao: "Muito",
    },
    { 
        id: 2, 
        descricao: "Pouco",
    },
    { 
        id: 3, 
        descricao: "Todos os dias",
    },
    { 
        id: 4, 
        descricao: "Nunca pratiquei nenhum exercicio",
    },
];


const listaTodos = () => {

    return ExercicioDB;

}


const BuscaPorId = (id) => {

    const result = ExercicioDB.filter((item) => {
           return parseInt(item.id) === parseInt(id);
    });

    return result.length > 0 ? result[0] : undefined;

}


const BuscaPorDescricao = (id) => {

    const result = ExercicioDB.filter((item) => {
           return parseInt(item.id) === parseInt(id);
    });

    return result.length > 0 ? result[0] : undefined;

}

const criaNovoExercicio = ({ id, descricao }) => {


    ExercicioDB.push({ id, descricao });

}


module.exports = {
    listaTodos,
    BuscaPorId,
    criaNovoExercicio
}