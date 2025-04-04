const bd = require('../../BD/mysql');

const tabla = 'clientes';

function todos(){
return bd.todos(tabla);

}

function agregar(data){
    return bd.agregar(tabla,data);
} 

function eliminar(id){
    return bd.eliminar(tabla,id);
}

function uno(id){
    return bd.uno(tabla,id);
}


module.exports = {
    todos,agregar,eliminar,uno
}