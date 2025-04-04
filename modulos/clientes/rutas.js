const express = require("express");
const router = express.Router();
const respuestas = require("../../red/respuestas");
const controlador = require("./controlador");

//rutas cliente

router.get("/", function (req, res) {
  //respuestas.success(req, res, 200, "TODO OK");
  respuestas.error(req, res, 500, "error en la consulta");
});
// res.send("ESTAS EN LA RAIZ DE CLIENTES");

router.get("/todos", async function (req, res) {
  try {
    const item = await controlador.todos();
    respuestas.success(req, res, 200, item);
  } catch (error) {
    respuestas.error(req, res, 500, error);
  }
});
router.get("/:id", async function (req, res) {
  try {
    const item = await controlador.uno(req.params.id);
    respuestas.success(req, res, 200, item);
  } catch (error) {
    respuestas.error(req, res, 500, error);
  }
});

router.post("/agregar", async function (req, res) {
  try {
    const item = await controlador.agregar(req.body);
    if (req.body.id == 0) {
      mensaje = "datos agregados";
    } else {
      mensaje = "datos actualizados";
    }
    respuestas.success(req, res, 200, item);
  } catch (error) {
    respuestas.error(req, res, 500, error);
  }
});

router.post("/eliminar", async function (req, res) {
    try {
      const item = await controlador.eliminar(req.body.id);
      respuestas.success(req, res, 200, item);
    } catch (error) {
      respuestas.error(req, res, 500, error);
    }
  });



module.exports = router;
