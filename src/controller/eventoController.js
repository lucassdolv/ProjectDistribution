const Evento = require('../models/evento.js');
const Participante = require("../models/participante");

const EventoController = {
  create: async (req, res) => {
    try {
      const { nome, data_evento, localizacao } = req.body;

      const EventoCriado = await Evento.create({
        nome,
        data_evento,
        localizacao,
      });

      return res.status(200).json({
        msg: " Evento criado com sucesso",
        Evento: EventoCriado,
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
      const { nome, data_evento, localizacao } = req.body;

      const EventoUpdate = await Evento.findByPk(id);

      if (EventoUpdate == null) {
        return res.status(404).json({
          msg: "Evento nao encontrado",
        });
      }
      const updated = await EventoUpdate.update({
        nome,
        data_evento,
        localizacao,
      });

      if (updated) {
        return res.status(200).json({
          msg: "Evento atualizado com sucesso!",
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
      const eventos = await Evento.findAll();  // Alterado para "eventos"
      return res.status(200).json({
        msg: "Eventos encontrados",
        Evento: eventos,  // Retorna "eventos" na resposta
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const EventoFind = await Evento.findByPk(id);

      if (EventoFind == null) {
        return res.status(404).json({
          msg: "Evento não encontrado",
        });
      }
      return res.status(200).json({
        msg: "Evento encontrado",
        Evento: EventoFind,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const EventoFind = await Evento.findByPk(id);
      if (EventoFind == null) {
        return res.status(404).json({
          msg: "Evento não encontrado",
        });
      }
      const ParticipantesById = await Participante.findAll({
        where: {
          eventoId: id,
        },
      });
      if (ParticipantesById.length > 0) {
        for (const participante of ParticipantesById) {
          await participante.destroy();
        }
      }
      await EventoFind.destroy();
      return res.status(200).json({
        msg: "Evento deletado com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },  
  getAllPerEvent: async (req, res) => {
    try {
      const { id } = req.params;
      const ParticipanteById = await Participante.findAll({
        where: {
          eventoId: id,
        },
      });
      if (ParticipanteById == null) {
        return res.status(404).json({
          msg: "Participantes não encontrados",
        });
      }
      return res.status(200).json({
        msg: "Participantes encontrados",
        Participante: ParticipanteById,
      });
    } catch (error) {
      console.error(error);
      return res.status(404).json({ msg: "Acione o Suporte" });
    }
  },
};

module.exports = EventoController;
