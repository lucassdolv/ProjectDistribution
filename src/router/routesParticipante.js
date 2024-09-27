const { Router } = require("express");
const { validateParticipante, validateEmail, validateEventoIdParams } = require("../middleware/ValidateParticipante");
const ParticipanteController = require("../controller/participanteController");
const { validateParticipanteId } = require("../middleware/ValidateParticipante");


const router = Router();

router.post("/", validateParticipante, validateEmail, (req, res) => {
    ParticipanteController.create(req, res);
});
router.get("/", (req, res) => {
    ParticipanteController.getAll(req, res);
});
router.delete("/:id", validateParticipanteId, (req, res) => {
    ParticipanteController.delete(req, res);
});
router.put("/:id", validateParticipanteId, validateParticipante, (req, res) => {
    ParticipanteController.update(req, res);
});

router.get("/:id", validateParticipanteId, (req, res) => {
    ParticipanteController.getOne(req, res);
});
router.get("/por-evento/:eventoId", validateEventoIdParams, (req, res) => {
    ParticipanteController.getAllPerEvent(req, res);
})

module.exports = router;