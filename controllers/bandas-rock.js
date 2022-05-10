import BandaRock from "./bandaRockModel.js";

const controller = {

  get: function (req, res) {
    BandaRock.find({}).then((data) => {
      res.status(200).json(data);
    }).catch((e) => {
      res.status(501).json({ error: e.message });
    })
  },
  post: function (req, res) {
    console.log("recebi requisição...");
    let { id, name, country, style } = req.body;
    BandaRock.find({ id }).then((data) => {
      if (data.length != 0) {
        res.status(501).json({ error: "ID já existe!" });
        return
      }
      let banda = new BandaRock({ id, name, country, style })
      banda.save().then((data) => {
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
    let { id, name, country, style } = req.body;
    BandaRock.find({ id }).then((data) => {
      if (data.length == 0) {
        res.status(501).json({ error: "ID não existe!" });
        return
      }
      let banda = data[0]
      banda.name = name;
      banda.country = country;
      banda.style = style;
      banda.save().then((data) => {
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
    BandaRock.findOneAndRemove({ id }).then((data) => {
      res.status(200).json(data);
    }).catch((e) => {
      res.status(501).json({ error: e.message });
    })
  },
}

export default controller;