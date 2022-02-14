const express = require("express");
const cors = require("cors");
const app = express();
const routers = require("routers/routers");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use("/", routers);
app.listen(PORT, () => console.log(`Server has been started on port:${PORT}`));