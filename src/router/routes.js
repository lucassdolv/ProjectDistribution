const { Router } = require("express");
 
const eventoRoutes = require('./routesEvento');
const participanteRoutes = require('./routesParticipante');
 
const router = Router();
 
router.use('/participante', participanteRoutes);
router.use('/evento', eventoRoutes);

module.exports = router;