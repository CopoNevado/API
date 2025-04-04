const bd = require('../../BD/mysql');

const tabla = 'usuarios';

function todos() {
    return bd.todos(tabla);
}

function agregar(data) {
    if (!data || Object.keys(data).length === 0) {
        throw new Error("Datos inválidos para agregar o actualizar usuario");
    }
    return bd.agregar(tabla, data);
}

function eliminar(id) {
    if (!id) {
        throw new Error("ID inválido para eliminar usuario");
    }

    return bd.eliminar(tabla, id); // Cambié para que pase solo el ID
}

function uno(id) {
    return bd.uno(tabla, id);
}

module.exports = {
    todos,
    agregar,
    eliminar,
    uno
};
