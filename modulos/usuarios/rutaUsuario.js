const express = require("express");
const router = express.Router();
const respuestas = require("../../red/respuestas");
const controladorUsuarios = require("./controladorUsuario");

// Rutas para usuarios

router.get("/", function (req, res) {
  respuestas.error(req, res, 500, "Error en la consulta de usuarios");
});

router.get("/todos", async function (req, res) {
  try {
    const usuarios = await controladorUsuarios.todos();
    respuestas.success(req, res, 200, usuarios);
  } catch (error) {
    respuestas.error(req, res, 500, error.message || "Error al obtener usuarios");
  }
});

router.get("/:id", async function (req, res) {
  try {
    const usuario = await controladorUsuarios.uno(req.params.id);
    respuestas.success(req, res, 200, usuario);
  } catch (error) {
    respuestas.error(req, res, 500, error.message || "Error al obtener usuario");
  }
});

router.post("/agregar", async function (req, res) {
  try {
    const resultado = await controladorUsuarios.agregar(req.body);
    const usuario = { id: resultado.insertId, ...req.body };
    const mensaje = req.body.id == 0 ? "Usuario agregado" : "Usuario actualizado";
    respuestas.success(req, res, 200, { mensaje, usuario });
  } catch (error) {
    respuestas.error(req, res, 500, error.message || "Error al agregar usuario");
  }
});

router.post("/eliminar", async function (req, res) {
  try {
    console.log("ID recibido para eliminar:", req.body.id); 
    const resultado = await controladorUsuarios.eliminar(req.body.id);
    if (resultado.affectedRows === 0) {
      return respuestas.error(req, res, 404, "Usuario no encontrado");
    }
    respuestas.success(req, res, 200, { mensaje: "Usuario eliminado" });
  } catch (error) {
    console.error("Error al eliminar usuario:", error); 
    respuestas.error(req, res, 500, error.message || "Error al eliminar usuario");
  }
});

//RodriVale2025...

module.exports = router;
