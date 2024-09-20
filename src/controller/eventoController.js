const Evento = require("../models/evento");

const EventoController = {
  create: async (req, res) => {
    try {
      const { nome, data, localizacao } = req.body;

      const EventoCriado = await Evento.create({
        nome,
        data,
        localizacao
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
      const { nome, data, localizacao } = req.body;

      const EventoUpdate = await Evento.findBypk(id);

      if (EventoUpdate == null) {
        return res.status(404).json({
          msg: "Evento nao encontrado",
        });
      }
      const updated = await EventoUpdate.update({
        nome,
        data,
        localizacao
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
      const Evento = await User.findAll();
      return res.status(200).json({
        msg: "Eventos encontrados",
        Evento: Evento,
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
      EventoFind.destroy();
      return res.status(200).json({
        msg: "Evento deletado com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
};

module.exports = EventoController;