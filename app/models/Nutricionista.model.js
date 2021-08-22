
const NutricionistaDB = [
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

    return NutricionistaDB;

}


const BuscaPorId = (id) => {

    const result = NutricionistaDB.filter((item) => {
           return parseInt(item.id) === parseInt(id);
    });

    return result.length > 0 ? result[0] : undefined;

}


const BuscaPorDescricao = (id) => {

    const result = NutricionistaDB.filter((item) => {
           return parseInt(item.id) === parseInt(id);
    });

    return result.length > 0 ? result[0] : undefined;

}
const criaNovoNutriocionista = ({ id, descricao }) => {

 
    NutricionistaDB.push({ id, descricao });

}


module.exports = {
    listaTodos,
    BuscaPorId,
    criaNovoNutriocionista
}
