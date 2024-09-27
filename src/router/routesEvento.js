const { Router } = require("express");
const { validateEvento } = require("../middleware/ValidateEvento");
const EventoController = require("../controller/EventoController");
const { validateEventoId } = require("../middleware/ValidateEvento");

const router = Router();

router.post("/", validateEvento, (req, res) => {
    EventoController.create(req, res);
});
router.get("/", (req, res) => {
    EventoController.getAll(req, res);
});
router.delete("/:id", validateEventoId, (req, res) => {
    EventoController.delete(req, res);
});
router.put("/:id", validateEventoId, validateEvento, (req, res) => {
    EventoController.update(req, res);
});

router.get("/:id", validateEventoId, (req, res) => {
    EventoController.getOne(req, res);
});
router.get("/:id/participante", validateEventoId, (req, res) => {
    EventoController.getAllPerEvent(req, res);
}
)

module.exports = router;