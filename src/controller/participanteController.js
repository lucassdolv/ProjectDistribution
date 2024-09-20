const Participante = require("../models/participante");

const ParticipanteController = {
  create: async (req, res) => {
    try {
      const { nome, email, eventoId } = req.body;

      const ParticipanteCriado = await Participante.create({
        nome,
        email,
        eventoId
      });

      return res.status(200).json({
        msg: " Participante criado com sucesso",
        Participante: ParticipanteCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, eventoId } = req.body;

      const ParticipanteUpdate = await Participante.findBypk(id);

      if (ParticipanteUpdate == null) {
        return res.status(404).json({
          msg: "Participante nao encontrado",
        });
      }
      const updated = await ParticipanteUpdate.update({
        nome,
        email,
        eventoId
      });

      if (updated) {
        return res.status(200).json({
          msg: "Participante atualizado com sucesso!",
        });
      }
      return res.status(500).json({
        msg: "Erro ao atualizar!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getAll: async (req, res) => {
    try {
      const Participante = await User.findAll();
      return res.status(200).json({
        msg: "Participantes encontrados",
        Participante: Participante,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const ParticipanteFind = await Participante.findByPk(id);

      if (ParticipanteFind == null) {
        return res.status(404).json({
          msg: "Participante não encontrado",
        });
      }
      return res.status(200).json({
        msg: "Participante encontrado",
        Participante: ParticipanteFind,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const ParticipanteFind = await Participante.findByPk(id);
      if (ParticipanteFind == null) {
        return res.status(404).json({
          msg: "Participante não encontrado",
        });
      }
      ParticipanteFind.destroy();
      return res.status(200).json({
        msg: "Participante deletado com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
};

module.exports = ParticipanteController;