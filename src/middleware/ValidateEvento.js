const validateEvento = (req, res, next) => {
  const { nome, data_evento, localizacao } = req.body;

  if (!nome || !data_evento || !localizacao) {
    return res.status(400).json({
      msg: "Campos invalidos, revise caro amigo.",
    });
  }
  return next();
};
const validateEventoId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      msg: "Parametro faltando",
    });
  }

  return next();
};

module.exports = { validateEvento, validateEventoId};