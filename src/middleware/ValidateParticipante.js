const Participante = require("../models/participante");

const validateParticipante = (req, res, next) => {
    const { nome, email, eventoId } = req.body;
  
    if (!nome || !email || !eventoId) {
      return res.status(400).json({
        msg: "Campos invalidos, revise caro amigo.",
      });
    }
    return next();
  };
  const validateParticipanteId = (req, res, next) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({
        msg: "Parametro faltando",
      });
    }
  
    return next();
  };
  const validateEventoIdParams = (req, res, next) => {
    const { eventoId } = req.params;
  
    if (!eventoId) {
      return res.status(400).json({
        msg: "Parametro faltando",
      });
    }
  
    return next();
  };

  const validateEmail = async (req, res, next) => {
    const { email } = req.body;
  
    try {
      const participante = await Participante.findOne({
        where: { email: email }, 
      });

      if (participante) {
        return res.status(400).json({ 
          msg: "Email já utilizado",
        });
      }
      return next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao validar email" });
    }
  };
    
  
  module.exports = { validateParticipante, validateParticipanteId, validateEmail, validateEventoIdParams};