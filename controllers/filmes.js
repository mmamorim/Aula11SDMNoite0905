import Filme from "./filmeModel.js";

const controller = {

  get: function (req, res) {
    Filme.find({}).then((data) => {
      res.status(200).json(data);
    }).catch((e) => {
      res.status(501).json({ error: e.message });
    })
  },
  post: function (req, res) {
    console.log("recebi requisição...");
    let { id, name } = req.body;
    Filme.find({ id }).then((data) => {
      if (data.length != 0) {
        res.status(501).json({ error: "ID já existe!" });
        return
      }
      let filme = new Filme({ id, name })
      filme.save().then((data) => {
        res.status(200).json(data);
      }).catch((e) => {
        res.status(501).json({ error: e.message });
      })
    }).catch((e) => {
      res.status(501).json({ error: e.message });
    })
  },
  put: function (req, res) {
    console.log("recebi requisição update...", req.body);
    let { id, name } = req.body;
    Filme.find({ id }).then((data) => {
      if (data.length == 0) {
        res.status(501).json({ error: "ID não existe!" });
        return
      }
      let filme = data[0]
      filme.name = name;
      filme.save().then((data) => {
        res.status(200).json(data);
      }).catch((e) => {
        res.status(501).json({ error: e.message });
      })
    }).catch((e) => {
      res.status(501).json({ error: e.message });
    })
  },
  delete: function (req, res) {
    console.log("recebi requisição remove...", req.body);
    let id = req.body.id;
    Filme.findOneAndRemove({ id }).then((data) => {
      res.status(200).json(data);
    }).catch((e) => {
      res.status(501).json({ error: e.message });
    })
  },
}

export default controller;