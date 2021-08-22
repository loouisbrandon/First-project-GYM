const PersonalDB = [
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

    return PersonalDB;

}


const BuscaPorId = (id) => {

    const result = PersonalDB.filter((item) => {
           return parseInt(item.id) === parseInt(id);
    });

    return result.length > 0 ? result[0] : undefined;

}


const BuscaPorDescricao = (id) => {

    const result = PersonalDB.filter((item) => {
           return parseInt(item.id) === parseInt(id);
    });

    return result.length > 0 ? result[0] : undefined;

}
const criaNovoPersonal= ({ id, descricao }) => {

 
    PersonalDB.push({ id, descricao });

}


module.exports = {
    listaTodos,
    BuscaPorId,
    criaNovoPersonal
}
