const express = require("express");
const app = express();

const home = require("./routes/index");
const apihome = require("./routes/index");
const product = require("./routes/product");

app.use(express.json({ extended: false }));

app.use("/", home);
app.use("/api", apihome);
app.use("/api/product", product);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Vidserver is running in port ${PORT}`));
