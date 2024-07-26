const express = require("express");
const response = require("../red/response");
const controller = require("../controller/controller");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const getTask = await controller.get_All()
    response.success(req, res, getTask);
  } catch (error) {
    response.error(req, res, error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getTaskID = await controller.get_ID(req.params.id)
    response.success(req, res, getTaskID)
  } catch (error) {
    response.error(req, res, error)
  } 
});

router.post("/", async (req,res) => {
  try {
    await controller.post_Data(req.body)
    response.success(req, res, req.body)
  } catch (error) {
    response.error(req, res, error)
  }
});

router.put("/:id", async (req, res) => {
  try {
    await controller.update_Data(req.body, req.params.id)
    response.success(req, res, 'Registro Actualizado')
  } catch (error) {
    response.error(req, res, error)
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await controller.remove_Data(req.params.id)
    response.success(req, res, 'Registro eliminado correctamente')
  } catch (error) {
    response.error(req, res, error)
  }
})

module.exports = router;
