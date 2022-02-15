const express = require("express");
const db_list_services = require("../data_base/db_list_services").list_services;
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.send(db_list_services);
  } catch (e) {
    res.status(400).send("Error from server");
  }
});

module.exports = router;
