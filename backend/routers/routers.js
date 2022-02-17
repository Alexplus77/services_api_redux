const express = require("express");
let db_list_services = require("../data_base/db_list_services").list_services;
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.send(db_list_services);
  } catch (e) {
    res.status(400).send("Error from server");
  }
});
router.get("/serviceItem/:id", (req, res) => {
  try {
    const findService = db_list_services.find(
      ({ id }) => String(id) === req.params.id
    );
    res.status(200).send(findService);
  } catch (e) {
    res.status(400).send("Error from server");
  }
});
router.delete("/:id", (req, res) => {
  try {
    db_list_services = db_list_services.filter(
      ({ id }) => String(id) !== req.params.id
    );
    res.status(200).send(db_list_services);
  } catch (e) {
    res.status(400).send("Error from server");
  }
});
router.post("/create", (req, res) => {
  try {
    if (req.body.id) {
      db_list_services.map((service) => {
        if (service.id === req.body.id) {
          service.name = req.body.name;
          service.price = req.body.price;
          service.describe = req.body.describe;
        }
        return service;
      });
    } else {
      db_list_services.push({ ...req.body, id: uuidv4() });
    }
    res.status(200).send(db_list_services);
  } catch (e) {
    res.status(400).send("Error from server");
  }
});

module.exports = router;
